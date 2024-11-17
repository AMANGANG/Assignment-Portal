const express = require('express');
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', adminController.registerAdmin);
router.post('/login', adminController.loginAdmin);
router.get('/assignments', authMiddleware.verifyAdmin, adminController.getAssignments);
router.post('/assignments/:id/accept', authMiddleware.verifyAdmin, adminController.acceptAssignment);
router.post('/assignments/:id/reject', authMiddleware.verifyAdmin, adminController.rejectAssignment);

module.exports = router;
