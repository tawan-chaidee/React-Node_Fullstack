const jwt = require('jsonwebtoken'); 
const jwtSecret = process.env.JWT_SECRET;  

// Middleware to authenticate JWT token
exports.authenticate = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });  // Reject if token is invalid
    }

    req.userId = decoded.userId;  // Attach user data to the request object if token is valid
    next(); 
  });
};
