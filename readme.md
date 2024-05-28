# Setup Instructions:

> install project dependencies using "npm install"
> create .env file and write these data:
   PORT=3000
   MONGO_URI=mongodb://127.0.0.1:27017/LoginSignup
   JWT_SECRET=aaaaa
   EMAIL_USER="Your_email"
   EMAIL_PASS="YOUR_PASS"
   BASE_URL=http://localhost:3000


# Running the Application:

> npm start

# API Usage Guide:

1. /api/login (POST METHOD)
2. /api/signup (POST METHOD)
3. /api/profile (GET METHOD) ---> send the JWT token Through Header

# Functionality:

1. /api/signup: Register a new user.
   (Required fields: username, email, password) ---> Send in JSON

2. /api/login: login as a user.
   (Required fields: email, password) ---> Send in JSON

3. /api/profile : Getting profile of Registered User
   (required field in header : JWT token)
