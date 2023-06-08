const routes = require('express').Router();

const teacherUser = require('../controllers/index.js');

//routes.get('/', lesson1controller.aronRoute);//
routes.get('/teacher', teacherUser.userRoute)
//routes.get('/moi', lesson1controller.moiRoute);
//routes.get('/mina', lesson1controller.mirnaRoute);


module.exports = routes;


