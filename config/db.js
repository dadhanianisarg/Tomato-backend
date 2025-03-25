import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
      useUnifiedTopology: true,
      tls: true
      }
    )
    .then(() =>console.log("DB Connected"));
};
