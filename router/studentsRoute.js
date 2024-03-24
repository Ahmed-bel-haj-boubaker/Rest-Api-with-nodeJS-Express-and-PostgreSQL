const { Router } = require("express");
const {
  getAllStudent,
  getStudentById,
  addStudent,
  deleteStudent,
  updateStudent
} = require("../controller/studentController");

const router = Router();

router.route("/").get(getAllStudent).post(addStudent);
router.route("/:id").get( getStudentById).delete(deleteStudent).put(updateStudent);

module.exports = router;
