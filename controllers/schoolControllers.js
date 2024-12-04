import { addSchool, getSchoolLists } from "../model/schoolModel.js";

const addSchoolController = async (req, res) => {
  try {
    const { id, name, address, latitude, longitude } = await req.body;
    console.log(name, address, latitude, longitude);

    if (!id || !name || !address || !latitude || !longitude) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const data = { id, name, address, latitude, longitude };
    console.log(data);
    console.log(await addSchool(data));
    return res.status(201).json({ message: "School added successfully." });
  } catch (err) {
    console.error("Error in controller:", err.message);
    return res
      .status(500)
      .json({ message: "Database error.", error: err.message });
  }
};


const getListController = async (req, res) => {
    try {
        const lists = await getSchoolLists();
        return res.status(200).json(lists)
    } catch (err) {
        console.error("Error in controller:", err.message);
        return res.status(500)
          .json({ message: "Database error.", error: err.message });
      }
        
    }




export { addSchoolController, getListController };
