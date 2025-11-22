import { useState } from 'react';
import './App.css';
import Shell from './ui/Shell';
import QuestBrowser from './ui/QuestBrowser';
import OrchardView from './ui/OrchardView';

type ViewMode = 'map' | 'quests';

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('map');

  return (
    <Shell>
      <div className="app-container">
        {/* View Switcher */}
        <div className="view-switcher">
          <button
            className={`view-tab ${viewMode === 'map' ? 'active' : ''}`}
            onClick={() => setViewMode('map')}
          >
            🗺️ Orchard Map
          </button>
          <button
            className={`view-tab ${viewMode === 'quests' ? 'active' : ''}`}
            onClick={() => setViewMode('quests')}
          >
            📜 Quest Log
          </button>
        </div>

        {/* View Content */}
        <div className="view-content">
          {viewMode === 'map' && <OrchardView />}
          {viewMode === 'quests' && <QuestBrowser />}
        </div>
      </div>
    </Shell>
  );
}

export default App;
