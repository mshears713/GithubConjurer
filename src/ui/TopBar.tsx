/**
 * TopBar Component
 *
 * Application header with title and minimal controls.
 */

import React from 'react';
import './TopBar.css';

const TopBar: React.FC = () => {
  return (
    <header className="top-bar">
      <div className="top-bar-left">
        <span className="app-icon">🌳</span>
        <h1 className="app-title">Orchard of Branches</h1>
      </div>
      <div className="top-bar-right">
        <span className="subtitle">Your Git Learning Grove</span>
      </div>
    </header>
  );
};

export default TopBar;
