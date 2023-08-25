import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    // eslint-disable-next-line no-console
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    isConnected = true;
    // eslint-disable-next-line no-console
    console.log('MondoDB connected');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};