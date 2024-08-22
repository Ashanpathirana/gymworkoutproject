// models/messageModel.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    username: { type: String, required: true },
    text: { type: String, required: true },
    time: { type: String, required: true },
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
