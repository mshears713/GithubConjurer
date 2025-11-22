/**
 * Footer Component
 *
 * Status footer showing current status and hints.
 */

import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <span className="status-indicator">●</span>
        <span>Ready to grow</span>
      </div>
      <div className="footer-right">
        <span className="hint">💡 Tip: Click on trees to begin your quests</span>
      </div>
    </footer>
  );
};

export default Footer;
