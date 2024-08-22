// routes/message.js
const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authenticate');
const Message = require('../models/messageModel');

// Add a new message
router.post('/messages', authenticate, async (req, res) => {
    const { text, time } = req.body;
    const userId = req.userId;
    const username = req.username;

    if (!text || !time || !userId || !username) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newMessage = new Message({
            text,
            time,
            user: userId,
            username
        });

        await newMessage.save();

        console.log('Message saved successfully:', newMessage);
        res.status(201).json(newMessage);
    } catch (error) {
        console.error('Error adding message:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
