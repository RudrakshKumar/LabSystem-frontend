import Student from "../models/Student.js";

// Insert Student
export const insertStudent = async (req, res) => {
    try {
        const { firstName,lastName, usn, branch, sec } = req.body;
        const student = new Student({ firstName,lastName, usn, branch, sec });
        await student.save();
        res.status(201).json({ message: "Student added successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Retrieve All Students
export const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Retrieve a single student
export const getStudentByUSN = async (req, res) => {
    try {
        const { usn } = req.params;
        const student = await Student.findOne({ usn });

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Delete Student by ID //
export const deleteStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndDelete(id);

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.json({ message: "Student deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
