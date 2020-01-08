const config = require('config');
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const token = req.header('x-auth-token'); //~ don't forget that 'req...' is the payload from the client side

  // check for token
  if(!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' })
  }
  try {
    // verify token
    const decoded = jwt.verify(token, config.get('jwtSecret')); //~we've imported config folder
    // Add user from payload
    req.user = decoded;
    next();
  } catch(e) {
    res.status(400).json({ msg: 'Token is not valid' });
  }
}

module.exports = auth;