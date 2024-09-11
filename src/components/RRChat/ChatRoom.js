// src/ChatRoom.js
import React, { useState, useEffect } from 'react';
import { db } from '../../firebaseConfig';
import { collection, addDoc, serverTimestamp, query, onSnapshot } from 'firebase/firestore';
import './Css/CR.css'; // Import CSS

const formatDate = (date) => {
  const today = new Date();
  const messageDate = new Date(date);

  if (today.toDateString() === messageDate.toDateString()) {
    return 'Today';
  } else if (today.getDate() - messageDate.getDate() === 1) {
    return 'Yesterday';
  } else {
    return messageDate.toLocaleDateString();
  }
};

const ChatRoom = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [expandedMessageId, setExpandedMessageId] = useState(null);

  // Retrieve room name and username from localStorage
  const roomName = localStorage.getItem('roomName') || '';
  const username = localStorage.getItem('username') || 'Anonymous';

  useEffect(() => {
    if (roomName) {
      // Listen for messages in the room
      const messagesRef = collection(db, 'rooms', roomName, 'messages');
      const q = query(messagesRef);
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const msgs = [];
        querySnapshot.forEach((doc) => {
          msgs.push({ id: doc.id, ...doc.data() });
        });
        setMessages(msgs);
      });

      return () => unsubscribe();
    }
  }, [roomName]);

  const handleSendMessage = async () => {
    if (message.trim() === '' || !roomName) return;

    try {
      const messagesRef = collection(db, 'rooms', roomName, 'messages');
      await addDoc(messagesRef, {
        text: message,
        timestamp: serverTimestamp(),
        username: username
      });
      setMessage('');
    } catch (e) {
      console.error('Error sending message:', e);
    }
  };

  const toggleExpandMessage = (id) => {
    setExpandedMessageId(expandedMessageId === id ? null : id);
  };

  const groupedMessages = messages.reduce((acc, msg) => {
    const date = formatDate(msg.timestamp?.toDate());
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(msg);
    return acc;
  }, {});

  return (
    <div className="chat-container">
      <div className="message-list">
        {Object.keys(groupedMessages).map((date) => (
          <div key={date}>
            <div className="date-header">{date}</div>
            {groupedMessages[date].map((msg) => (
              <div
                key={msg.id}
                className="message"
                onClick={() => toggleExpandMessage(msg.id)}
              >
                <div className="message-user">{msg.username}</div>
                <div className={`message-text ${expandedMessageId === msg.id ? 'expanded' : ''}`}>
                  {msg.text}
                </div>
                <div className="message-timestamp">
                  {new Date(msg.timestamp?.toDate()).toLocaleTimeString()}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send Message</button>
      </div>
    </div>
  );
};

export default ChatRoom;
