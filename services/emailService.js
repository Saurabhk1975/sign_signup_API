const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    // user: "yourEmail@gmail.com",
    // pass: "Your_Pass",
  },
});

exports.sendConfirmationEmail = (email, username) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Confirmation Email",
    text: `Hello ${username},\n\nThank you for signing up! Please confirm your email by clicking the following link: \n\n${process.env.BASE_URL}/confirm/${email}\n\nThank you!`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};
