import React, { useState, useEffect } from 'react';
import './Css/RoomChatPage.css';

const RoomChatPage = () => {
  const [roomName, setRoomName] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (!storedUsername) {
      window.location.href = '/ChatStartPage';
    }
  }, []);

  const handleRoomChange = (e) => {
    setRoomName(e.target.value);
  };

  const handleRoomSubmit = (e) => {
    e.preventDefault();
    if (roomName.trim() === '') {
      alert('Room name cannot be empty!');
      return;
    }

    localStorage.setItem('roomName', roomName); // Save room name to localStorage
    window.location.href = `/ChatRoom?room=${encodeURIComponent(roomName)}`;
  };

  const handleDefaultRoom = (room) => {
    setRoomName(room);
    localStorage.setItem('roomName', room); // Save room name to localStorage
    window.location.href = `/ChatRoom?room=${encodeURIComponent(room)}`;
  };

  const username = localStorage.getItem('username');
  return (
    <div className="room-chat-page">
      <h1 className='wel'>Hello <span className='uname'>{username}!</span></h1>
      <h2>Join or Create a Room</h2>
      <center>
        <form className='form-group-room' onSubmit={handleRoomSubmit}>
          <div className="form-group">
            <input
              className="form-input"
              type="text"
              placeholder="Enter Room Name"
              value={roomName}
              onChange={handleRoomChange}
              required
            />
          </div>
          <button type="submit">Join/Create</button>
        </form>
        <div className="default-rooms">
          <center>
            <table>
              <tbody>
                <tr>
                  <td>
                    <button onClick={() => handleDefaultRoom('Gaming')}>Join Gaming</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button onClick={() => handleDefaultRoom('Sports')}>Join Sports</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button onClick={() => handleDefaultRoom('Music')}>Join Music</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button onClick={() => handleDefaultRoom('Movies')}>Join Movies</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </center>
        </div>
      </center>
    </div>
  );
};

export default RoomChatPage;
