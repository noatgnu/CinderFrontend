import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiSettingsService {
  /**
   * Signal to track if the application is in "Compact Mode" for higher information density.
   */
  public compactMode: WritableSignal<boolean> = signal(false);

  constructor() {
    // Attempt to load preference from localStorage
    const savedMode = localStorage.getItem('compactMode');
    if (savedMode !== null) {
      this.compactMode.set(savedMode === 'true');
    }
  }

  /**
   * Toggles the compact mode state and persists it to localStorage.
   */
  public toggleCompactMode(): void {
    const newValue = !this.compactMode();
    this.compactMode.set(newValue);
    localStorage.setItem('compactMode', newValue.toString());
  }

  /**
   * Sets the compact mode state explicitly.
   */
  public setCompactMode(value: boolean): void {
    this.compactMode.set(value);
    localStorage.setItem('compactMode', value.toString());
  }
}
