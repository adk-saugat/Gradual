import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log("Mongodb is connected!");
  } else {
    try {
      await mongoose.connect(process.env.MONGO_URI!);
      isConnected = true;
    } catch (error) {
      console.log("Error connecting to MongoDB", error);
    }
  }
};

export default connectDB;
