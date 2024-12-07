import mysql from "mysql2/promise";

let connection;

async function connectToDatabase() {
  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER, // Use `user` instead of `username`
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    });

    console.log("Connection created with MySQL successfully");
  } catch (err) {
    console.error("Error occurred while connecting to MySQL:", err.message);
    throw err; // Propagate error to calling function
  }
}

function getConnection() {
  if (!connection) {
    throw new Error("Database Connection Failed");
  }
  return connection;
}

export { connectToDatabase, getConnection };
