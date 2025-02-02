import mongoose from "mongoose";

export async function connectDB() {
  const url = process.env.MONGO_URL||"mongodb+srv://AxGA2pxhn8bdtfQl:AxGA2pxhn8bdtfQl@rahulapi.fwwx1.mongodb.net/?retryWrites=true&w=majority&appName=RAHULAPI"
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB is connected.");
  } catch (err) {
    console.log(err);
  }
}
