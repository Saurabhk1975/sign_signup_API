# Setup Instructions:

> install project dependencies using "npm install"

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
