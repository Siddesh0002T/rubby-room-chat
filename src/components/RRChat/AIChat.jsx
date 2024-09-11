import React, { useState, useEffect } from 'react';
import './Css/chatroom.css';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const roomName = localStorage.getItem('roomName') || 'Default Room';

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage = { username: 'You', text: input };
      setMessages([...messages, newMessage]);
      setInput('');
    }
  };

  useEffect(() => {
    const fetchMessages = async () => {
      // Fetch existing messages from your server or any other source
      // const fetchedMessages = await fetch('/api/messages');
      // setMessages(fetchedMessages);
    };
    fetchMessages();
  }, []);

  return (
    <div className="chat-container">
      <div className="chat-header">
        {roomName}
      </div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <div className="username">{message.username}</div>
            <div className="text">{message.text}</div>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatRoom;
