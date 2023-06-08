const router = require('express').Router();

const teacherUser = require('../controllers/index.js');


router.get('/', teacherUser.getData)



module.exports = router;


