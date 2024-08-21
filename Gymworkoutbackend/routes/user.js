// / routes/user.js
// const express = require('express');
// const router = express.Router();
// const jwt = require('jsonwebtoken');
// const User = require('../models/userModel'); // Adjust path as needed

// // Middleware to verify JWT token
// const authenticateToken = (req, res, next) => {
//   const token = req.headers['authorization']?.split(' ')[1];
//   if (token == null) return res.sendStatus(401);

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// };

// // Route to get user information
// router.get('/info', authenticateToken, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select('username _id'); // Select only needed fields
//     if (!user) return res.sendStatus(404);
//     res.json({ username: user.username, id: user._id });
//   } catch (err) {
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// module.exports = router;
// // 