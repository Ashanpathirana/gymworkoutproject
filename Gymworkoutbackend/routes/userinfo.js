const express = require('express');
const router = express.Router();
const User = require('../models/userModel'); // Adjust the path as necessary

// Your route handlers go here
router.get('/user-info', async (req, res) => {
    try {
        const user = req.user;
        console.log('User:', user); // Debugging line

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ userId: user._id, username: user.username });
    } catch (error) {
        console.error('Error in /user-info:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
