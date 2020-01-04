var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('landing', { title: 'Express' }); //@ How do I make it so sends renders an open RESTFUL endpoint for then the client/REACT to use.
});

module.exports = router;
