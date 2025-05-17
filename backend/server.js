import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./database/db.js";
import authRoutes from "./routes/authRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";

const app = express();

// Middleware
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api", chatRoutes);

// Basic route for testing
app.get("/", (req, res) => {
    res.json({ message: "API is running" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
