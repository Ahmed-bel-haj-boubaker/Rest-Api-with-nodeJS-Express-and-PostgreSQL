const pool = require("../db/db");
const asyncHandler = require("express-async-handler");

exports.getAllStudent = asyncHandler(async (req, res) => {
  pool.query("SELECT * FROM students",(error,result)=>{
    if (error) throw error;
    res.status(200).json({ data: result.rows });
  });
  
});
