import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// CORS Configuration
app.use(cors({
    origin: ["http://localhost:5173","http://localhost:3000", "http://127.0.0.1:5500"], // Allow only frontend origin
    credentials: true, // Allow cookies and authentication headers
}));
``
app.use(express.json()); // Parse JSON requests
app.use(cookieParser()); // Enable cookies

connectDB();

// Import Routes
import studentRoutes from "./routes/studentRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./database/db.js";

// Use Routes
app.use("/api/students", studentRoutes);
app.use("/api/auth", authRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
