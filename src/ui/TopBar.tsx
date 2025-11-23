/**
 * TopBar Component
 *
 * Application header with title and minimal controls.
 */

import React from 'react';
import './TopBar.css';

interface TopBarProps {
  onOpenSettings: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onOpenSettings }) => {
  return (
    <header className="top-bar">
      <div className="top-bar-left">
        <span className="app-icon">🌳</span>
        <h1 className="app-title">Orchard of Branches</h1>
      </div>
      <div className="top-bar-right">
        <span className="subtitle">Your Git Learning Grove</span>
        <button className="settings-button" onClick={onOpenSettings} title="Settings">
          ⚙️
        </button>
      </div>
    </header>
  );
};

export default TopBar;
