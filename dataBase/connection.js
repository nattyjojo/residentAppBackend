import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dataBaseconection = async () => {
  const URl = process.env.FOYER_DATA_BASE;
  const FOYER_DATA_BASE = URl;
  try {
    const connection = await mongoose.connect(FOYER_DATA_BASE);
  } catch (err) {
    console.log(err);
  }
};
export default dataBaseconection;
//      "mongodb+srv://nattyjojo9:Gwwgd6XLpuP5t5pl@cluster0.za2rhu2.mongodb.net/?retryWrites=true&w=majority";
