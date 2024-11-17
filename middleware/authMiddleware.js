const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Admin = require('../models/Admin');

// Verify user authentication
exports.verifyUser = async (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(403).json({ message: 'Access denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    req.userId = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Verify admin authentication
exports.verifyAdmin = async (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(403).json({ message: 'Access denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findById(decoded.adminId);
    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    req.adminId = decoded.adminId;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
