/**
 * Global Type Declarations
 *
 * Type definitions for Electron APIs exposed to the renderer process
 */

interface ElectronAPI {
  selectFolder: () => Promise<string | null>;
}

declare global {
  interface Window {
    electron?: ElectronAPI;
  }
}

export {};
