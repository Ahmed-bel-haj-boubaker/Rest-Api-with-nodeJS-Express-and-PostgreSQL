const {Router} = require('express');
const { getAllStudent } = require('../controller/studentController');

const router = Router();

router.get('/',getAllStudent);

module.exports = router;