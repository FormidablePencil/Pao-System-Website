var express = require('express');
var router = express.Router();

let controller1 = require('../controllers/landing');

router.get('/', controller1.get_landing);
router.post('/', controller1.submit_lead);
//@ sds
//! dfdfdfdffdff
//* sdsd
//? sdsd
//~ dfdfddff
//% fdffddfdfdfd
//todo dfdffddfddfdfdf

module.exports = router;



//I've used this to to see if frontend was connected to the backend via "proxy". 
// app.get('/api/customers', (req, res) => {
//   const customers = [
//     {id: 1, firstName: 'John', lastName: 'dan'},
//     {id: 2, firstName: 'Brad', lastName: 'Traversy'},
//     {id: 3, firstName: 'Mary', lastName: 'Swanson'},
//   ];

//   res.json(customers);
// });
// const port = 5000;
// app.listen(port, () => `Server running on port ${port}`);
