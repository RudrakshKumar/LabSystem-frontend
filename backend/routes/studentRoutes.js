import express from "express";
import { insertStudent, getStudents, getStudentByUSN, deleteStudentById } from "../controllers/studentController.js";

const router = express.Router();

router.post("/add", insertStudent);  // Insert student
router.get("/getAll", getStudents);  // Retrieve all students
router.get("/:usn", getStudentByUSN);  // Get student by USN
router.delete("/:id", deleteStudentById);  // Delete student by id

export default router;
