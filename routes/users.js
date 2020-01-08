var express = require('express');
var router = express.Router();
const User = require('../models/userSchema')
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');


router.post('/', async (req, res) => {
  const { username, email, password } = req.body; //~req.body is the payload

  if(!username || !email || !password ){
    return res.status(400).json({ msg: 'Please enter all fields' })
  }

  User.findOne({ email:email })
  .then(user => {
    if(user) return res.status(400).json({ msg: 'User already exists' });
    
    //if passes both 'if test' create a new user
    const newUser = new User({
      username,
      email,
      password
    });

    //encrypting the password
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if(err) throw err;
        newUser.password = hash;
        newUser.save()
          .then(user => {

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
                }); //~ we are responing with a token so we could use it to athenticate wuth private routes that we haven't setup yet
              } //~ jwt.sign() is what we put into the it. In our case id so the token consists of a user id
            )
           });
      })
    })
  })
});

module.exports = router;