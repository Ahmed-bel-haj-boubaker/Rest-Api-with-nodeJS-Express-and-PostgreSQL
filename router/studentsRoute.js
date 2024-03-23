const {Router} = require('express');
const { getAllStudent,getStudentById } = require('../controller/studentController');

const router = Router();

router.get('/',getAllStudent);
router.get('/:id',getStudentById)

module.exports = router;