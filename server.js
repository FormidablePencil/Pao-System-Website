var express = require('express');
var path = require('path');
const mongoose = require('mongoose');
require('dotenv/config');

var app = express();
var indexRouter = require('./routes/index');



//Body parser built that is built into Express
app.use(express.json());

// Serve static assets if in production
if(process.env.NODE_ENV == 'production') {
  //Set statuc folder
  app.use(express.static('../frontend/public'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}

app.use('/', indexRouter);

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

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = app;
