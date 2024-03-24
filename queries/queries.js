exports.getStudentsQuery = "SELECT * FROM students";
exports.getStudentByIdQuery = "SELECT * FROM students s WHERE s.id = $1";
exports.checkEmailExistQuery = "SELECT s FROM students s WHERE s.email =$1";
exports.addStudentQuery =
  "INSERT INTO students (name,email,age,dob) VALUES ($1,$2,$3,$4)";
exports.deleteStudentQuery = "DELETE FROM students WHERE id =$1";
exports.updateStudentQuery =
  "UPDATE students SET name = $1, email = $2, age = $3, dob = $4 WHERE id = $5";
