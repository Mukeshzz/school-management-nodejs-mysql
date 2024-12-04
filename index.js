import dotenv from 'dotenv'
import { connectToDatabase } from "./config/db.js";
import { app } from "./app.js";

dotenv.config({
  path:'./env'
})

// const PORT = 3000;

connectToDatabase();

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running at port: ${process.env.PORT}`);
});
