import { connect } from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from config.env
dotenv.config({ path: path.join(__dirname, "../config/config.env") });

const connectDB = async () => {
    try {
        // eslint-disable-next-line no-undef
        await connect(process.env.MONGO_URI);
        console.log("MongoDB Connected");
    } catch (err) {
        console.error(err.message);
        // eslint-disable-next-line no-undef
        process.exit(1);
    }
};

export default connectDB;
