import { addSchool, getSchoolLists } from "../model/schoolModel.js";
import { calculateDistance } from "../utils/distanceCalculator.js";

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
    const { latitude, longitude } = req.query;
    console.log(latitude, longitude);
    if (isNaN(latitude) || isNaN(longitude)) {
      throw new Error("Invalid user coordinates");
    }
    const lists = await getSchoolLists();
    console.log(lists)
    const userLat = parseFloat(latitude);
    const userLon = parseFloat(longitude);
    console.log(userLat)
    console.log(userLon)

    const sortedSchools = lists
      .map((school) => ({
        ...school,
        distance: calculateDistance(
          userLat,
          userLon,
          school.latitude,
          school.longitude
        ),
      }
    ))
      .sort((a, b) => a.distance - b.distance);

    res.status(200).json(sortedSchools);

    
  } catch (err) {
    console.error("Error in controller:", err.message);
    return res
      .status(500)
      .json({ message: "Database error.", error: err.message });
  }
};

export { addSchoolController, getListController };
