/**
 * Sidebar Component
 *
 * Left navigation sidebar showing progress overview and navigation.
 */

import React from 'react';
import './Sidebar.css';
import { useProgressStore } from '@state/useProgressStore';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onToggle }) => {
  const completionPercentage = useProgressStore((state) => state.getCompletionPercentage());

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <button className="sidebar-toggle" onClick={onToggle} title={collapsed ? 'Expand' : 'Collapse'}>
        {collapsed ? '→' : '←'}
      </button>

      {!collapsed && (
        <div className="sidebar-content">
          <section className="progress-section">
            <h2>Your Progress</h2>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${completionPercentage}%` }}></div>
            </div>
            <p className="progress-text">{completionPercentage}% Complete</p>
          </section>

          <nav className="sidebar-nav">
            <h3>Orchard Zones</h3>
            <ul>
              <li className="nav-item active">
                <span className="zone-icon">🌱</span>
                <span>Inner Clearing</span>
              </li>
              <li className="nav-item locked">
                <span className="zone-icon">🌿</span>
                <span>Trunk Region</span>
              </li>
              <li className="nav-item locked">
                <span className="zone-icon">🍃</span>
                <span>Canopy</span>
              </li>
              <li className="nav-item locked">
                <span className="zone-icon">🌳</span>
                <span>Orchard Edge</span>
              </li>
              <li className="nav-item locked">
                <span className="zone-icon">🏡</span>
                <span>Conservatory</span>
              </li>
              <li className="nav-item locked">
                <span className="zone-icon">🚶</span>
                <span>Perimeter Trail</span>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
