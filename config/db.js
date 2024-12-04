import mysql from "mysql2/promise";

let connection;

async function connectToDatabase() {
  try {
    connection = await mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root", // Use `user` instead of `username`
      password: "Mukesh@1234",
      database: "schoolmanagement",
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
