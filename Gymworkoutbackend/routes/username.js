const express = require('express');
const User = require('../models/userModel');
const authenticate = require('../middlewares/authenticate'); // Middleware to verify token
const router = express.Router();

// GET /userinfo - Retrieve user information based on the token
router.get('/userinfo', authenticate, async (req, res) => {
    try {
        const user = await User.findById(req.userId); // `req.userId` is set by the authenticate middleware
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ username: user.username });
    } catch (error) {
        console.error('Error retrieving user info:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;

