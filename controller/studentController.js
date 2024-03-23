const pool = require("../db/db");
const asyncHandler = require("express-async-handler");
const { getStudents, getStudentById } = require("../queries/queries");

exports.getAllStudent = asyncHandler(async (req, res) => {
  pool.query(getStudents, (results) => {
    res.status(200).json({ data: results.rows });
  });
});

exports.getStudentById = asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  pool.query(getStudentById, [id], (error,results) => {  
    if(error) throw error;
    res.status(200).json({ data: results.rows });
  });
});
