import React, { useState } from 'react';
import './App.css';

function App() {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [message, setMessage] = useState('');

  const emojis = [
    '😊', '👍', '🤔', '🚀', '🎉', '👫', '🤝', '🚫', '👀', '🤷‍♂️'
  ];

  const handleEmojiClick = (emoji) => {
    setMessage(message + emoji);
    setShowEmojiPicker(false);
  };

  const handleEmojiPickerToggle = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  return (
    <div className="app-container">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
        className="message-input"
      />
      <button
        className="emoji-button"
        onClick={handleEmojiPickerToggle}
      >
        👉
      </button>
      {showEmojiPicker && (
        <div className="emoji-picker">
          {emojis.map((emoji, index) => (
            <span
              key={index}
              className="emoji"
              onClick={() => handleEmojiClick(emoji)}
            >
              {emoji}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
