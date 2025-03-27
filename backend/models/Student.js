import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    usn: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    branch: { type: String, required: true },
    sec: { type: String, required: true },
    password: { type: String }
});


StudentSchema.pre("save", function (next) {
    if (!this.password) {
        this.password = `${this.firstName}_${this.usn}`;
    }
    next();
});


const Student = mongoose.model("Student", StudentSchema);
export default Student;
