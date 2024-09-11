// src/firestoreOperations.js
import { db } from './firebaseConfig';
import { collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';

// Function to create a room
const createRoom = async (roomName) => {
  try {
    const roomRef = doc(db, 'rooms', roomName);
    await setDoc(roomRef, {
      createdAt: serverTimestamp()
    });
    console.log(`Room ${roomName} created.`);
  } catch (e) {
    console.error('Error creating room:', e);
  }
};

// Function to add a message to a room
const addMessageToRoom = async (roomName, messageId, message) => {
  try {
    const messagesRef = collection(db, 'rooms', roomName, 'messages');
    const messageRef = doc(messagesRef, messageId);
    await setDoc(messageRef, {
      text: message.text,
      timestamp: serverTimestamp(),
      username: message.username
    });
    console.log(`Message added to room ${roomName}`);
  } catch (e) {
    console.error('Error adding message:', e);
  }
};

// Example usage
const initializeDatabase = async () => {
  // Create a room
  await createRoom('room1');

  // Add a message to the room
  await addMessageToRoom('room1', 'message1', {
    text: 'Hello everyone! Welcome to room1.',
    username: 'UserA'
  });
};

// Run the initialization
initializeDatabase();
