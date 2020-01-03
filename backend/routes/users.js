var express = require('express');
var router = express.Router();

let controller1 = require('../controllers/landing');

/* GET users listing. */
router.get('/', controller1.get_landing);

module.exports = router;
