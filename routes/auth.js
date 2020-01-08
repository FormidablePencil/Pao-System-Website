var express = require('express');
var router = express.Router();
const User = require('../models/userSchema')
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth')

router.post('/', async (req, res) => {
  const { email, password } = req.body; //~req.body is the payload

  if( !email, !password ){ //~ what checks to see if filled in the blank
    return res.status(400).json({ msg: 'Please enter all fields' })
  }

  User.findOne({ email:email }) //~ what checks to see if db has a user with the corresponding email
  .then(user => {
    if(!user) return res.status(400).json({ msg: 'User does exists' }); //~ if didn't find user by email then return a message
    
    //validating the password. //~ compair inputted password with the password of the corresponding user by email 
    bcrypt.compare(password, user.password)
      .then(isMatch => {
        if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials'});

        jwt.sign(
          { id: user.id},
          config.get('jwtSecret'),
          { expiresIn: 3600 },
          (err, token) => {
            if(err) throw err;
            res.json({
              token: token,
              user: {
                id: user.id,
                username:user.username,
                email: user.email
              } 
            }); 
          } 
        )
      })
  })
});

//constantly check the token
router.get('/user', auth, (req, res) => {
  User.findById(req.user.id)
    .select('-password') //disregarding the password
    .then(user => res.json(user));
});

module.exports = router;