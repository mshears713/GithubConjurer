import { useState } from 'react';
import './App.css';
import Shell from './ui/Shell';
import QuestBrowser from './ui/QuestBrowser';
import OrchardView from './ui/OrchardView';
import RepoGrove from './ui/RepoGrove';
import ScenarioBrowser from './ui/ScenarioBrowser';

type ViewMode = 'map' | 'quests' | 'scenarios' | 'repos';

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('map');

  const handleNavigateToRepos = () => {
    setViewMode('repos');
  };

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
          <button
            className={`view-tab ${viewMode === 'scenarios' ? 'active' : ''}`}
            onClick={() => setViewMode('scenarios')}
          >
            🌱 Practice Scenarios
          </button>
          <button
            className={`view-tab ${viewMode === 'repos' ? 'active' : ''}`}
            onClick={() => setViewMode('repos')}
          >
            🌲 Repository Grove
          </button>
        </div>

        {/* View Content */}
        <div className="view-content">
          {viewMode === 'map' && <OrchardView />}
          {viewMode === 'quests' && <QuestBrowser onNavigateToRepos={handleNavigateToRepos} />}
          {viewMode === 'scenarios' && <ScenarioBrowser />}
          {viewMode === 'repos' && <RepoGrove />}
        </div>
      </div>
    </Shell>
  );
}

export default App;
