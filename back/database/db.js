import mongoose from "mongoose";

const Connection = async () => {
  const URI = process.env.DB_URI;
  try {
    await mongoose.connect(URI);
    console.log("Database Connected");
  } catch (error) {
    console.log("Error we can't connected to database", error);
  }
};

export default Connection;
