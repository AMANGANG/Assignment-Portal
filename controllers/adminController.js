const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const Assignment = require('../models/Assignment');

// Register a new admin
exports.registerAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) return res.status(400).json({ message: 'Admin already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({ username, password: hashedPassword });
    await newAdmin.save();

    res.status(201).json({ message: 'Admin registered successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Login an admin
exports.loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// View assignments for an admin
exports.getAssignments = async (req, res) => {
  const adminId = req.adminId;

  try {
    const assignments = await Assignment.find({ adminId });
    res.json(assignments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Accept an assignment
exports.acceptAssignment = async (req, res) => {
  const { id } = req.params;

  try {
    const assignment = await Assignment.findById(id);
    if (!assignment) return res.status(404).json({ message: 'Assignment not found' });

    assignment.status = 'accepted';
    await assignment.save();

    res.json({ message: 'Assignment accepted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Reject an assignment
exports.rejectAssignment = async (req, res) => {
  const { id } = req.params;

  try {
    const assignment = await Assignment.findById(id);
    if (!assignment) return res.status(404).json({ message: 'Assignment not found' });

    assignment.status = 'rejected';
    await assignment.save();

    res.json({ message: 'Assignment rejected' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
