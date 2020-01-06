// var createError = require('http-errors'); //@
var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser'); //
// var logger = require('morgan');
// const mongoose = require('mongoose');
require('dotenv/config');


var indexRouter = require('./routes/index');

var app = express();

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

// Serve static assets if in production
if(process.env.NODE_ENV == 'production') {
  //Set statuc folder
  app.use(express.static('../frontend/public'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}../frontend/public/index.html`))
  });
}
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.send('error');
// });


//~I've created the database and connected to it.
//@ Connecting to DB... 

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://Admin:Dennis15@cluster0-whq0u.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perfor m actions on the collection object
//   client.close();
// });

//@ ----
//% Using middlewares

//* const indexRoute = require('./routes/index');

//* app.use('/index', indexRoute); //this means that this is the starting point of an api within the index.js router //! though this won't work since the index routers have already been set by another middleware

//% ----
//- This is used to get req.body for json files to work but by the looks of it something else is already handling it
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// ---
//@ gettting an api to work from external sources. It passess the CORS policy: No 'Access-Control-Allow-Origin'
// const cors = require('cors');
// app.use(cors());
// app.use(bodyParser.json());

//this is by which I've fetch the data:
// fetch('http://localhost:5000/')
//   .then(result => {
//   return result.json();
// })
//   .then(data => {
//   console.log(data);
// })
//@ ----

module.exports = app;
