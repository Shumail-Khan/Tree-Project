import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

let isConnected = false;

const connectDB = async () => {
    if (isConnected) return;
    try {
        await mongoose.connect(process.env.MONGO_URL);
        isConnected = true;
        console.log('Database is connected');
    } catch (err) {
        console.error('Error while connecting', err);
    }
};

export default connectDB;