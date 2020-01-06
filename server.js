var express = require('express');
const cors = require('cors');

// var path = require('path'); //@
const mongoose = require('mongoose'); //@
require('dotenv/config');

var app = express();
var indexRouter = require('./routes/index');
// const bodyParser = require('body-parser')

app.use(express.json()); //~ order matters. Not all the index 
app.use('/', indexRouter);
app.use(cors());

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION || MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
                              //MONGOD_URI is what heroko uses to connect to databases

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
  //Set statuc folder
  app.use(express.static('client/build')); //~ this is the thing that specifies to the domain(heroku in my case) from where to laod the files. 

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}

const port = process.env.PORT || 5000; //~ we tell the server to be on port 5000 if not in domain

app.listen(port, () => console.log(`Server started on port ${port}`));

