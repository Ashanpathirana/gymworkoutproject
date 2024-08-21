// const mongoose = require('mongoose');

// const exerciseSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     type: {
//         type: String,
//         required: true,
//     },
//     duration: {
//         type: Number,
//         required: true,
//     },
//     intensity: {
//         type: String,
//         required: true,
//     },
//     date: {
//         type: Date,
//         required: true,
//     },
//     description: {
//         type: String,
//     },
//     notes: {
//         type: String,
//     },
//     userId: {
//         type: String, // UUID or ObjectId type depending on your user model
//         required: true,
//     },
// }, {
//     timestamps: true,
// });

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
