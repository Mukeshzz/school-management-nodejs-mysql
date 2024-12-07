
# 🏫 School Management API

A simple and efficient API built with **Node.js**, **Express**, and **MySQL** for managing school data. This API enables users to:

- **Add new schools** with location details.
- **Retrieve a sorted list of schools** based on proximity to a user-specified location.

---

## 📋 Table of Contents

- [Prerequisites](#-prerequisites)
- [Folder Structure](#-folder-structure)
- [Installation](#-installation)
- [Running the API](#-running-the-api)
- [API Endpoints](#-api-endpoints)


---

## 🔧 Prerequisites

Ensure the following tools are installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MySQL](https://www.mysql.com/) (or compatible database)
- [Postman](https://www.postman.com/) (for API testing)

---

## 📂 Folder Structure

```
school-management-nodejs-mysql/
│
├── controllers/
│   ├── schoolController.js      # Handles API logic
│
├── models/
│   ├── schoolModel.js           # Manages database operations
│
├── utils/
│   ├── distanceCalculator.js    # Calculates distances between coordinates
│
├── config/
│   ├── dbConfig.js              # Database connection configuration
│
├── routes/
│   ├── schoolRoutes.js          # API routing configuration
│
├── .env                         # Environment variables for DB credentials
├── index.js                     # Main server file
├── app.js                       # Initializes the API
├── package.json                 # Project dependencies
├── README.md                    # Documentation
└── node_modules/                # Installed Node modules
```

---

## ⚙️ Installation

Follow these steps to set up the project:

### 1. Clone the repository:
```bash
git clone https://github.com/Mukeshzz/school-management-nodejs-mysql.git
cd school-management-nodejs-mysql
```

### 2. Install dependencies:
```bash
npm install express dotenv mysql2
```

### 3. Set up the MySQL database:
- **Create a new database** in MySQL.
- Configure the `.env` file with your database credentials:
  ```
  DB_HOST=localhost
  DB_USER=root
  DB_PASSWORD=yourpassword
  DB_NAME=school_db
  ```
- Run this SQL query to create the required table:
  ```sql
  CREATE TABLE schools (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      address VARCHAR(255),
      latitude FLOAT,
      longitude FLOAT
  );
  ```

---

## 🚀 Running the API

Start the server using the following command:
```bash
npm start
```

The API will run at: [http://localhost:8000](http://localhost:8000) (or the port specified in your `.env` file).

---

## 📡 API Endpoints

### 1. **Add a School**
- **Endpoint**: `/api/addSchool`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "id": 1,
    "name": "Green Valley School",
    "address": "123 Main St, Springfield",
    "latitude": 40.6523,
    "longitude": -73.8765
  }
  ```
- **Response**:
  ```json
  {
    "message": "School added successfully."
  }
  ```

---

### 2. **Get List of Schools Sorted by Proximity**
- **Endpoint**: `/api/getSchoolLists`
- **Method**: `GET`
- **Query Parameters**:
  - `latitude` - User's latitude (e.g., `40.7128`)
  - `longitude` - User's longitude (e.g., `-74.0060`)
  
  **Example**: `/api/listSchools?latitude=40.7128&longitude=-74.0060`

- **Response**:
  ```json
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
  ```

---

