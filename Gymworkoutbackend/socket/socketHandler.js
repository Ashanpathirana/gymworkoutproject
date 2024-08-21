// const socketio = require('socket.io');

// const Workout = require('../models/Workout');
// // Assuming you have a model for chat messages
// const ChatMessage = require('./models/ChatMessage'); 

// function setupSocketIO(server) {
//   const io = socketio(server, {
//     cors: {
//       origin: "http://localhost:3001",
//       methods: ["GET", "POST"]
//     }
//   });

//   io.on('connection', (socket) => {
//     console.log('New client connected:', socket.id);

//     // Handle fetching chat messages
//     socket.on('getChatMessages', async () => {
//       try {
//         const messages = await ChatMessage.find(); // Fetch messages from the database
//         socket.emit('chatMessages', messages);
//       } catch (error) {
//         console.error('Error fetching chat messages:', error);
//         socket.emit('chatMessages', []);
//       }
//     });

//     // Handle receiving a new chat message
//     socket.on('newChatMessage', async (messageData) => {
//       try {
//         const newMessage = new ChatMessage(messageData);
//         await newMessage.save();
//         io.emit('chatMessage', messageData); // Broadcast the new message to all clients
//       } catch (error) {
//         console.error('Error saving chat message:', error);
//       }
//     });

//     // Handle fetching progress data for a specific user
//     socket.on('getProgressData', async (userId) => {
//       try {
//         const workouts = await Workout.find({ userId }).sort({ date: -1 });
//         socket.emit('progressData', workouts);
//       } catch (error) {
//         console.error('Error fetching progress data:', error);
//         socket.emit('progressData', []);
//       }
//     });

//     // Handle receiving new workout data
//     socket.on('newWorkout', async (workoutData) => {
//       try {
//         const newWorkout = new Workout(workoutData);
//         await newWorkout.save();
//         io.emit('updateProgress', newWorkout); // Broadcast the new workout data to all clients
//       } catch (error) {
//         console.error('Error saving workout:', error);
//       }
//     });

//     // Handle client disconnection
//     socket.on('disconnect', () => {
//       console.log('Client disconnected:', socket.id);
//     });
//   });

//   return io;
// }

// module.exports = setupSocketIO;
