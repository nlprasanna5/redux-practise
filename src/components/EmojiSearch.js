import React, { useState } from 'react';
import styles from './EmojiSearch.module.css';
// List of emojis
const emojis = [
  {
    emoji: "😀",
    name: "Grinning Face"
  },
  {
    emoji: "😃",
    name: "Grinning Face with Big Eyes"
  },
  {
    emoji: "😄",
    name: "Grinning Face with Smiling Eyes"
  },
  {
    emoji: "😁",
    name: "Beaming Face with Smiling Eyes"
  },
  {
    emoji: "😆",
    name: "Grinning Squinting Face"
  },
  {
    emoji: "😅",
    name: "Grinning Face with Sweat"
  },
  {
    emoji: "🥰",
    name: "Smiling Face with Hearts"
  },
  {
    emoji: "😍",
    name: "Smiling Face with Heart-Eyes"
  },
  {
    emoji: "😊",
    name: "Smiling Face with Smiling Eyes"
  },
  {
    emoji: "😎",
    name: "Smiling Face with Sunglasses"
  },
  {
    emoji: "🤩",
    name: "Star-Struck"
  },
  {
    emoji: "🙂",
    name: "Slightly Smiling Face"
  },
  {
    emoji: "😉",
    name: "Winking Face"
  },
  {
    emoji: "🥳",
    name: "Partying Face"
  },
  {
    emoji: "😇",
    name: "Smiling Face with Halo"
  },
  {
    emoji: "😐",
    name: "Neutral Face"
  },
  {
    emoji: "😑",
    name: "Expressionless Face"
  },
  {
    emoji: "😶",
    name: "Face Without Mouth"
  },
  {
    emoji: "😏",
    name: "Smirking Face"
  },
  {
    emoji: "😒",
    name: "Unamused Face"
  },
  {
    emoji: "😔",
    name: "Pensive Face"
  },
  {
    emoji: "😕",
    name: "Confused Face"
  },
  {
    emoji: "🙃",
    name: "Upside-Down Face"
  },
  {
    emoji: "🤔",
    name: "Thinking Face"
  },
  {
    emoji: "🤨",
    name: "Face with Raised Eyebrow"
  },
  {
    emoji: "😳",
    name: "Flushed Face"
  },
  {
    emoji: "🥺",
    name: "Pleading Face"
  },
  {
    emoji: "😱",
    name: "Face Screaming in Fear"
  },
  {
    emoji: "😨",
    name: "Fearful Face"
  },
  {
    emoji: "😰",
    name: "Anxious Face with Sweat"
  },
  {
    emoji: "😥",
    name: "Sad but Relieved Face"
  },
  {
    emoji: "😢",
    name: "Crying Face"
  },
  {
    emoji: "😭",
    name: "Loudly Crying Face"
  },
  {
    emoji: "😤",
    name: "Face with Steam From Nose"
  },
  {
    emoji: "😠",
    name: "Angry Face"
  },
  {
    emoji: "🤬",
    name: "Face with Symbols on Mouth"
  }
];


const EmojiSearchApp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setShowDropdown(value.length > 0);
  };

  const handleEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji);
  };

  const filteredEmojis = emojis.filter(
    (emoji) =>
      emoji.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emoji.emoji.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.emojiSearchApp}>
      <h1>Emoji Search</h1>
      <input
        type="text"
        placeholder="Search emoji..."
        value={searchTerm}
        onChange={handleSearchChange}
        className={styles.input}
      />
      {showDropdown && (
        <div className={styles.emojiDropdown}>
          {filteredEmojis.map((emoji, index) => (
            <div
              key={index}
              className={styles.emojiItem}
              onClick={() => handleEmojiSelect(emoji)}
            >
              <span className={styles.emoji}>{emoji.emoji}</span>
              <span className={styles.name}>{emoji.name}</span>
            </div>
          ))}
        </div>
      )}
      {selectedEmoji && (
        <div className={styles.selectedEmoji}>
          <span className={styles.emoji}>{selectedEmoji.emoji}</span>
          <span className={styles.name}>{selectedEmoji.name}</span>
        </div>
      )}
    </div>
  );
  
};


export default EmojiSearchApp;
