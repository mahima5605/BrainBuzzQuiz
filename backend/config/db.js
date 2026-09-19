import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://mahimay5605_db_user:RTBefLuUNxES3Tiv@cluster0.l7sberk.mongodb.net/QuizApp"
        );

        console.log("DB CONNECTED");
    } catch (error) {
        console.log("DB CONNECTION ERROR:");
        console.log(error);
    }
};