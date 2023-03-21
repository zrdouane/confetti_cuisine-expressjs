const port = 3000;
const express = require('express');
const app = express();

const path = require("path");
const errorController = require("./controller/errorController");

app.set('view engine','ejs');
app.set('views','views');
app.use(express.static(path.join(__dirname,'public/css')));
app.use(express.static(path.join(__dirname,'public/images')));
app.get('/thanks', (req, res, next) => {
    res.render('thanks');
});
app.get('/contact', (req, res) => {
    res.render('contact');
});
app.get('/courses', (req, res) => {
    res.render('courses');
});
app.get('/', (req, res) => {
    res.render('index');
});
app.use(errorController.internalServerError);
app.use(errorController.pageNotFound);
app.listen(port);