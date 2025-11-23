import { contextBridge } from 'electron';

// Expose protected methods that allow the renderer process to use
// ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  // Git operations will be added here in Phase 4
  // For now, we'll just expose a basic API structure
  platform: process.platform,
});

export {};
