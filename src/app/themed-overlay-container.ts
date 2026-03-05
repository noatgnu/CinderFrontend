import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';

@Injectable()
export class ThemedOverlayContainer extends OverlayContainer {
  protected override _createContainer(): void {
    super._createContainer();
    this.syncThemeClass();

    const observer = new MutationObserver(() => this.syncThemeClass());
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
  }

  private syncThemeClass(): void {
    if (!this._containerElement) return;

    const isDark = document.body.classList.contains('dark-theme');
    if (isDark) {
      this._containerElement.classList.add('dark-theme');
      this._containerElement.classList.remove('light-theme');
    } else {
      this._containerElement.classList.add('light-theme');
      this._containerElement.classList.remove('dark-theme');
    }
  }
}
