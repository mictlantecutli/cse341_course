const teacherRoute = require('./routes/index');
const express = require('express');
const app = express();
//const parser = require('body-parser');
var cors = require('cors');


app.use(cors());

const port = 8000;

//app.use(parser.json());

app.use('/', teacherRoute);

app.listen(process.env.port || port);
console.log('Web Server is listening at port '+ (process.env.port || port));