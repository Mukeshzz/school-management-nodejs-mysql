import { getConnection } from "../config/db.js";



const addSchool = async (data) => {
  try {
    const connection = await getConnection();
    const query = `INSERT INTO schoolLists (id, name, address, latitude, longitude) VALUES (?, ?, ?, ?, ?)`;
    const { id, name, address, latitude, longitude } = data;
    const [result] = await connection.query(query, [
      id,
      name,
      address,
      latitude,
      longitude,
    ]);
    return result;
  } catch (err) {
    console.error("Error while adding school:", err.message);
    throw err;
  }
};

const getSchoolLists = async () => {
    
  try {
    const connection = await getConnection();
    const query = `SELECT * FROM schoolLists`;
    const [results] = await connection.execute(query);
    return results;
  } catch (err) {
    console.error("Error while fetching schools:", err.message);
    throw err;
  }
};

export  { addSchool, getSchoolLists};
