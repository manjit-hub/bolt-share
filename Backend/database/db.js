import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const DBConnection = async () => {
    const DB_URI = process.env.DB_URI;
    // Check if DB_URI is defined
    if (!DB_URI) {
        console.error('DB_URI is not defined in environment variables');
        return;
    }

    try {
        await mongoose.connect(DB_URI, { useNewUrlParser: true }); // ensure that Mongoose uses the new parser.
        console.log("Database Connected Successfully.");
    } catch (error) {
        console.log("Error while connecting to Database", error.message);
    }
};

export { DBConnection };
