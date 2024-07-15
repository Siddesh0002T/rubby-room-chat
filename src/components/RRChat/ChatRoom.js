import React, { useState, useEffect, useRef } from 'react';


const ChatRoom = ({ location }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const socketRef = useRef(null);

  useEffect(() => {
    const username = localStorage.getItem('username');
    const roomName = new URLSearchParams(location.search).get('room');

    if (!username || !roomName) {
      window.location.href = '/ChatStartPage';
    } else {
      socketRef.current = new WebSocket(`wss://hack.chat/chat-ws?username=${username}&room=${roomName}`);

      socketRef.current.onmessage = (event) => {
        const message = JSON.parse(event.data);
        setMessages((prevMessages) => [...prevMessages, message]);
      };

      socketRef.current.onclose = () => {
        console.log('WebSocket closed');
      };

      return () => {
        socketRef.current.close();
      };
    }
  }, [location.search]);

  const handleMessageSend = () => {
    if (input.trim() !== '') {
      socketRef.current.send(JSON.stringify({ content: input }));
      setInput('');
    }
  };

  return (
    <div className="chat-room">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <strong>{msg.username}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleMessageSend()}
        />
        <button onClick={handleMessageSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatRoom;
