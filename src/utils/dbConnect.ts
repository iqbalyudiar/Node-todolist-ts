import mongoose from "mongoose";

let isConnected: boolean = false;

export default async (callback: Function) => {
  try {
    if (isConnected) {
      console.log("Already connected to MongoDB");
      return;
    }

    const MONGODB_URI =
      "mongodb+srv://iqbalyudiar:TREutVmfuGslROy4@cluster0.tdgibqc.mongodb.net/?retryWrites=true&w=majority";

    await mongoose.connect(MONGODB_URI);

    console.log("Connected to MongoDB");

    if (callback) {
      callback();
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
