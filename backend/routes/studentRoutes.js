import express from "express";
import { 
    insertStudent, 
    getStudents, 
    getStudentByUSN, 
    deleteStudentById,
    getStudentById,
    updateStudentCode 
} from "../controllers/studentController.js";

const router = express.Router();

// Specific routes first
router.get("/getAll", getStudents);  // Retrieve all students
router.post("/add", insertStudent);  // Insert student
router.get("/byId/:id", getStudentById);  // Get student by ID
router.get("/byUsn/:usn", getStudentByUSN);  // Get student by USN
router.patch("/updateCode/:id", updateStudentCode);  // Update student code
router.delete("/:id", deleteStudentById);  // Delete student by id

export default router;
