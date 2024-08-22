// UserinfoModel.js
const mongoose = require('mongoose');

const userInfoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String },
  hobbies: { type: String },
  socialMedia: { type: String },
  profilePic: { type: String } // URL or base64 of the profile picture
  // Other fields as needed
});

module.exports = mongoose.model('UserInfo', userInfoSchema);
