import express from 'express';
import { verifyToken } from '../middleware/authJWT.js';
import { createStudent, deleteStudentById, getById, getallStudents, updateStudentById } from '../controllers/studentsController.js';

const router = express.Router();

router.post('/create',[verifyToken], createStudent);
router.get("/getallStudents",[verifyToken], getallStudents);
router.get("/:id", getById);
router.put("/:id", updateStudentById);
router.delete("/:id", deleteStudentById);

/** export the sub router */
const studentRouters = router;
export default studentRouters;