import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Access denied" });
    }

    try {
        const verified = jwt.verify(token, "your_secret_key");
        req.user = verified;
        next();
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
        res.status(403).json({ message: "Invalid token" });
    }
};
