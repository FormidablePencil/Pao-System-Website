var express = require('express');
const cors = require('cors');
const axios = require('axios');

// var path = require('path'); //@
const mongoose = require('mongoose'); //@
require('dotenv/config');

var app = express();
var indexRouter = require('./routes/index');
// const bodyParser = require('body-parser')

app.use('/', indexRouter);
// Body parser built that is built into Express
app.use(express.json());
// app.use(bodyParser.json());

app.use(cors());

//Connect to DB
// mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });


// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
  //Set statuc folder
  app.use(express.static('client/build')); //~ this is the thing that specifies to the domain(heroku in my case) from where to laod the files. 

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}



// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://Admin:Dennis15@cluster0-whq0u.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perfor m actions on the collection object
//   client.close();
// });

const port = process.env.PORT || 5000; //~ we tell the server to be on port 5000 if not in domain

app.listen(port, () => console.log(`Server started on port ${port}`));

