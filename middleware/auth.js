import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Access denied, token missing' });
  }

  const token = authHeader.split(' ')[1]; 
  try {
    const decoded = jwt.verify(token, 'secret'); 
    req.userId = decoded.userId; 
    next();
  } catch (err) {
    res.status(403).json({ message: 'Invalid token' });
  }
};
