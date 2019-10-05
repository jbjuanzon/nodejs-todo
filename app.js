const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bulma/css')));
app.use('/font', express.static(path.join(__dirname, 'node_modules/@mdi/font')));

const listRoutes = require('./routes/taskList');
const errorController = require('./controllers/error');

app.use(bodyParser.urlencoded({extended: false}));
//To set our public files such as css and js
app.use(express.static(path.join(__dirname, 'public')));

app.use(listRoutes);

app.use(errorController.get404);

app.listen(3000);