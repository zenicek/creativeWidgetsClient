import './Settings.css';
import { useEffect, useState } from 'react';

export function SettingsBar({ name, width }) {
  const [nameState, setName] = useState(name);
  const [widthState, setWidth] = useState(width);

  useEffect(() => {
    setName(name);
    setWidth(width);
  }, [name, width]);

  return (
    <div className="settings-bar-ctn">
      <div className="settings-wrapper-ctn">
        <div className="settings-option-ctn">
          Width(px)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 32 32"
            height="32px"
            width="32px"
            className="svg-icon"
          >
            <g id="size_x5F_width" fill="white">
              <path d="M32,16.001l-6-6v4h-2.001V8h-16v6.001H6v-4l-6,6l6,6v-4h1.999V24h16v-5.999H26v4L32,16.001z M21.999,22h-12V10h12V22z" />
            </g>
          </svg>
          <input
            type="number"
            className="settings-input"
            value={widthState}
            onChange={e => setWidth(e.target.value)}
          ></input>
        </div>
        <div className="settings-option-ctn">
          Widget Name
          <input
            type="text"
            className="settings-input name-input"
            value={nameState}
            onChange={e => setName(e.target.value)}
          ></input>
        </div>
        <div className="settings-option-ctn">
          <button id="save-btn">Save Widget</button>
        </div>
      </div>
    </div>
  );
}
//TODO: Add the onchange state so you can modify the canvas and store it in DB
