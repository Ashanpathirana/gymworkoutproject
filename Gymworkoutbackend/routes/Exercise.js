// const express = require('express');
// const router = express.Router();
// const Exercise = require('../models/exercise'); // Assuming you have an Exercise model

// // POST request to create a new exercise
// router.post('/api/exercises', async (req, res) => {
//     const { name, type, duration, intensity, date, description, notes, userId } = req.body;

//     try {
//         // Ensure userId is provided
//         if (!userId) {
//             return res.status(400).json({ message: 'User ID is required' });
//         }

//         // Save workout data
//         const newWorkout = new Workout({ name, type, duration, intensity, date, description, notes, userId });
//         await newWorkout.save();

//         res.status(201).json({ message: 'Workout added successfully', workout: newWorkout });
//     } catch (error) {
//         console.error('Error adding workout:', error);
//         res.status(500).json({ message: 'Server error', error: error.message });
//     }
// });

// module.exports = router;
