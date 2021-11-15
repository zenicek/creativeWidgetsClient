import './Input.toggle.css';
import { useState } from 'react';

export function InputToggle({ updateWidget, description }) {
  const [toggleInput, setToggleInput] = useState(true);

  const handleInput = e => {
    updateWidget(e.target.value);
  };

  const handleInputEnd = e => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      setToggleInput(true);
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return toggleInput ? (
    <p
      onDoubleClick={() => {
        setToggleInput(false);
      }}
    >
      {description}
    </p>
  ) : (
    <input
      type="text"
      className="settings-input"
      id="tap-input"
      value={description}
      onChange={e => handleInput(e)}
      onKeyDown={e => handleInputEnd(e)}
    ></input>
  );
}
