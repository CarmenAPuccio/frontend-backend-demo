const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const expressLogger = require('./config/logger');

const indexRouter = require('./routes/index');
const backendRouter = require('./routes/backend');

dotenv.config();

const app = express();

// view engine setup
app.set('./views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(expressLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/backend', backendRouter)

module.exports = app;