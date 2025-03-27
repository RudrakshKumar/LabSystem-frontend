import Student from "../models/Student.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
    const { usn, password } = req.body;

    try {
        const student = await Student.findOne({ usn });
        if (!student) {
            return res.status(400).json({ message: "Invalid USN or Password" });
        }

        const expectedPassword = student.password; // Fetch password from DB

        if (password !== expectedPassword) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: student._id, email: student.email }, "your_secret_key", {
            expiresIn: "1h",
        });

        // Set HTTP-Only Cookie (Secure, HttpOnly, SameSite=Strict)
        res.cookie("token", token, {
            httpOnly: true,
            // eslint-disable-next-line no-undef
            secure: process.env.NODE_ENV === "production", // Secure only in production
            sameSite: "Strict",
            maxAge: 3600000, // 1 hour
        });

        res.json({ message: "Login successful" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



export const logout = (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        // eslint-disable-next-line no-undef
        secure: process.env.NODE_ENV === "production",
        sameSite: "Strict",
    });
    res.json({ message: "Logged out successfully" });
};

