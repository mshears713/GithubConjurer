/**
 * Lesson Browser Component
 *
 * Development-only view to browse all parsed lessons.
 * Displays lessons organized by orchard zone.
 */

import React, { useState } from 'react';
import './LessonBrowser.css';
import { LESSONS, getAllZones } from '@content/generatedLessons';
import { OrchardZone } from '@orchard/types';
import { LessonData } from '@content/types';

const ZONE_DISPLAY_NAMES: Record<string, string> = {
  'inner-clearing': '🌱 Inner Clearing (Getting Started)',
  'trunk': '🌿 Trunk Region (Core Concepts)',
  'canopy': '🍃 Canopy (Branches)',
  'edge': '🌳 Orchard Edge (Collaboration)',
  'conservatory': '🏡 Conservatory (Advanced)',
  'perimeter': '🚶 Perimeter Trail (Best Practices)',
};

const LessonBrowser: React.FC = () => {
  const [selectedLesson, setSelectedLesson] = useState<LessonData | null>(null);
  const [selectedZone, setSelectedZone] = useState<OrchardZone | 'all'>('all');

  const zones = getAllZones();
  const filteredLessons = selectedZone === 'all'
    ? LESSONS
    : LESSONS.filter(l => l.zone === selectedZone);

  const lessonsByZone = zones.reduce((acc, zone) => {
    acc[zone] = LESSONS.filter(l => l.zone === zone);
    return acc;
  }, {} as Record<OrchardZone, LessonData[]>);

  return (
    <div className="lesson-browser">
      <div className="browser-header">
        <h1>📚 Lesson Browser</h1>
        <p className="subtitle">Development view - {LESSONS.length} lessons parsed</p>
      </div>

      <div className="browser-controls">
        <label>
          Filter by Zone:
          <select value={selectedZone} onChange={(e) => setSelectedZone(e.target.value as OrchardZone | 'all')}>
            <option value="all">All Zones ({LESSONS.length})</option>
            {zones.map(zone => (
              <option key={zone} value={zone}>
                {ZONE_DISPLAY_NAMES[zone]} ({lessonsByZone[zone].length})
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="browser-content">
        <div className="lessons-list">
          {selectedZone === 'all' ? (
            zones.map(zone => (
              <div key={zone} className="zone-section">
                <h2 className="zone-title">{ZONE_DISPLAY_NAMES[zone]}</h2>
                {lessonsByZone[zone].map(lesson => (
                  <div
                    key={lesson.id}
                    className={`lesson-item ${selectedLesson?.id === lesson.id ? 'selected' : ''}`}
                    onClick={() => setSelectedLesson(lesson)}
                  >
                    <h3>{lesson.title}</h3>
                    <p className="lesson-summary">{lesson.summary}</p>
                    <div className="lesson-meta">
                      <span className="lesson-file">📄 {lesson.sourceFile}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <div className="zone-section">
              <h2 className="zone-title">{ZONE_DISPLAY_NAMES[selectedZone]}</h2>
              {filteredLessons.map(lesson => (
                <div
                  key={lesson.id}
                  className={`lesson-item ${selectedLesson?.id === lesson.id ? 'selected' : ''}`}
                  onClick={() => setSelectedLesson(lesson)}
                >
                  <h3>{lesson.title}</h3>
                  <p className="lesson-summary">{lesson.summary}</p>
                  <div className="lesson-meta">
                    <span className="lesson-file">📄 {lesson.sourceFile}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {selectedLesson && (
          <div className="lesson-detail">
            <div className="detail-header">
              <h2>{selectedLesson.title}</h2>
              <button onClick={() => setSelectedLesson(null)} className="close-btn">✕</button>
            </div>

            <div className="detail-meta">
              <div className="meta-item">
                <strong>ID:</strong> {selectedLesson.id}
              </div>
              <div className="meta-item">
                <strong>Zone:</strong> {ZONE_DISPLAY_NAMES[selectedLesson.zone]}
              </div>
              <div className="meta-item">
                <strong>Source:</strong> {selectedLesson.sourceFile}
              </div>
              <div className="meta-item">
                <strong>Directory:</strong> {selectedLesson.directory}
              </div>
            </div>

            <div className="detail-section">
              <h3>Summary</h3>
              <p>{selectedLesson.summary}</p>
            </div>

            <div className="detail-section">
              <h3>Key Concepts</h3>
              <div className="concepts-list">
                {selectedLesson.keyConcepts.map((concept, idx) => (
                  <span key={idx} className="concept-tag">{concept}</span>
                ))}
              </div>
            </div>

            <div className="detail-section">
              <h3>Raw Markdown</h3>
              <pre className="markdown-preview">{selectedLesson.rawMarkdown.substring(0, 500)}...</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonBrowser;
