const pool = require("../db/db");
const asyncHandler = require("express-async-handler");
const {
  getStudentsQuery,
  getStudentByIdQuery,
  checkEmailExistQuery,
  addStudentQuery,
  deleteStudentQuery,
  updateStudentQuery,
} = require("../queries/queries");

exports.getAllStudent = asyncHandler(async (req, res) => {
  pool.query(getStudentsQuery, (error, results) => {
    if (error) throw error;
    res.status(200).json({ data: results.rows });
  });
});

exports.getStudentById = asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  pool.query(getStudentByIdQuery, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json({ data: results.rows });
  });
});

exports.addStudent = asyncHandler(async (req, res) => {
  const { email, age, dob, name } = req.body;
  pool.query(checkEmailExistQuery, [email], (error, results) => {
    if (results.rows.length > 0) {
      res.send("Email already exists");
    }
  });

  pool.query(addStudentQuery, [name, email, age, dob], (error, results) => {
    if (error) throw error;
    res.status(201).json({
      data: results.rows,
    });
  });
});
exports.deleteStudent = asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getStudentByIdQuery, [id], (error, results) => {
    if (results.rows.length === 0) {
      res.send("there is no student with is id ");
    }
  });

  pool.query(deleteStudentQuery, [id], (error, results) => {
    if (error) throw error;
    res.send("this student was deleted");
  });
});

exports.updateStudent = asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id);
  const { email, age, dob, name } = req.body;
  pool.query(getStudentByIdQuery, [id], (error, results) => {
    if (results.rowCount === 0) {
      res.send(error);
    }
  });
  pool.query(updateStudentQuery, [name, email, age, dob,id], (error, results) => {
    if (error) throw error;
    res.status(200).json({ data: results.rows });
  });
});
