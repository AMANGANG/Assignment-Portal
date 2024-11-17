const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.post('/upload', authMiddleware.verifyUser, userController.uploadAssignment);
router.get('/admins', userController.getAllAdmins);

module.exports = router;
