#School Management API
A simple API built using Node.js, Express, and MySQL to manage school data. This API allows users to add new schools and retrieve a list of schools sorted by proximity to a user-specified location.

Table of Contents
Prerequisites
Folder Structure
Installation
Running the API
API Endpoints
Contributing
Prerequisites
Make sure you have the following installed:

Node.js (version >= 14.x)
MySQL (or a MySQL-compatible database)
Postman (for testing the API)

#Folder Structure
school-api/
│
├── controllers/
│   ├── schoolController.js      # Controller for school-related routes
│
├── models/
│   ├── schoolModel.js           # Database model for school data
│
├── utils/
│   ├── distanceCalculator.js    # Utility to calculate distance between coordinates
│
├── config/
│   ├── dbConfig.js              # MySQL database connection configuration
│
├── routes/
│   ├── schoolRoutes.js          # API routes for school management
│
├── .env                         # Environment variables (e.g., DB credentials)
├── index.js                    # Main entry point for the server
├── app.js                      # Start point of the api
├── package.json                 # Node.js project dependencies
├── README.md                    # This file
└── node_modules/                 # Node modules

##Installation
Follow these steps to set up the project:

Clone the repository
https://github.com/Mukeshzz/school-management-nodejs-mysql.git
cd school-management-nodejs-mysql

Install dependencies
npm install express dotenv mysql2

Set up the MySQL database:
Create a new database in MySQL and configure the connection in the .env file.

Create the schools table using the following SQL query:

CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    address VARCHAR(255),
    latitude FLOAT,
    longitude FLOAT
);
Configure environment variables:

Rename the .env.example file to .env and update your database connection details:

makefile
Copy code
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=school_db


Running the API
After setting up the project and database, you can start the API server with the following command:


npm start
The server will start running on http://localhost:8000 (or any other port specified in your .env file).

API Endpoints
1. Add a School
Endpoint: /api/addSchool
Method: POST
Request Body:

{
  "id": 1,
  "name": "Green Valley School",
  "address": "123 Main St, Springfield",
  "latitude": 40.6523,
  "longitude": -73.8765
}

Response:

{
  "message": "School added successfully."
}

2. Get List of Schools Sorted by Proximity
Endpoint: /api/getSchoolLists

Method: GET

Query Parameters:

latitude: User's latitude (e.g., 40.7128)
longitude: User's longitude (e.g., -74.0060)
Example: /api/listSchools?latitude=40.7128&longitude=-74.0060

Response:

[
  {
    "id": 1,
    "name": "Green Valley School",
    "address": "123 Main St, Springfield",
    "latitude": 40.6523,
    "longitude": -73.8765,
    "distance": 10.5
  },
  {
    "id": 2,
    "name": "Maple Leaf High School",
    "address": "456 Elm St, Greenville",
    "latitude": 39.7292,
    "longitude": -104.9905,
    "distance": 20.3
  }
]

