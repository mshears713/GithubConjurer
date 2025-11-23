/**
 * Shell Component
 *
 * Main application layout with top bar, sidebar, content area, and footer.
 */

import React, { useState } from 'react';
import './Shell.css';
import TopBar from './TopBar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import DialoguePanel from './DialoguePanel';
import AchievementNotification from './AchievementNotification';
import SettingsPanel from './SettingsPanel';

interface ShellProps {
  children: React.ReactNode;
}

const Shell: React.FC<ShellProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="shell">
      <TopBar onOpenSettings={() => setSettingsOpen(true)} />
      <div className="shell-body">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <main className="shell-content">
          {children}
        </main>
      </div>
      <Footer />

      {/* Global Dialogue Overlay */}
      <DialoguePanel />

      {/* Achievement Notifications */}
      <AchievementNotification />

      {/* Settings Panel */}
      {settingsOpen && <SettingsPanel onClose={() => setSettingsOpen(false)} />}
    </div>
  );
};

export default Shell;
