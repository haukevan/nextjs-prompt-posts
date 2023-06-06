import mongoose from "mongoose";

let isConnected = false; //track connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MONGO IS already CONNECTED");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("MONGO IS NOW CONNECTED");
  } catch (error) {
    console.log(error);
  }
};
