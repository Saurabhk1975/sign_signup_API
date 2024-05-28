const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Database connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use("/api", authRoutes);
app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
