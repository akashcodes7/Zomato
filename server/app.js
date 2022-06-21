const express = require('express');
const app = express();
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: './config/.env' });
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');
//importing routes
const location = require('./routes/location');
const restaurent = require('./routes/restaurent');
const Addrestaurent = require('./routes/addRestaurent');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
//morgan configuration for storing req log
function assignid(req, res, next) {
  req.id = uuidv4();
  next();
}
app.use(assignid);
morgan.token('id', (req) => req.id);

morgan.token('param', (req, res, param) => 'userToken');
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  { flags: 'a' }
);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(
    morgan(':id :param :method :status :url "HTTP/:http-version"', {
      stream: accessLogStream,
    })
  );
}

//REST API
app.use('/', Addrestaurent);
app.use('/location', location);
app.use('/mealType', location);
app.use('/orders', location);
app.use('/restaurent', restaurent);
app.use('/menu', location);

module.exports = app;
