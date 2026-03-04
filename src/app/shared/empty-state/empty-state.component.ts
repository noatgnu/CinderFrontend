import { Component, Input, Output, EventEmitter } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  template: `
    <div class="empty-state-container">
      <mat-icon class="empty-state-icon">{{ icon }}</mat-icon>
      <h3 class="empty-state-title">{{ title }}</h3>
      <p class="empty-state-message">{{ message }}</p>
      @if (actionLabel) {
        <button mat-flat-button color="primary" (click)="action.emit()">
          {{ actionLabel }}
        </button>
      }
    </div>
  `,
  styles: [`
    .empty-state-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 48px 24px;
      text-align: center;
      color: var(--app-text-secondary);
    }

    .empty-state-icon {
      font-size: 64px;
      width: 64px;
      height: 64px;
      margin-bottom: 16px;
      opacity: 0.5;
      color: var(--app-text-secondary);
    }

    .empty-state-title {
      margin: 0 0 8px 0;
      font-size: 20px;
      font-weight: 500;
      color: var(--app-text-color);
    }

    .empty-state-message {
      margin: 0 0 24px 0;
      max-width: 400px;
      line-height: 1.5;
      color: var(--app-text-secondary);
    }
  `]
})
export class EmptyStateComponent {
  @Input() icon: string = 'search_off';
  @Input() title: string = 'No Results Found';
  @Input() message: string = 'Try adjusting your search or filters to find what you’re looking for.';
  @Input() actionLabel?: string;
  
  @Output() action = new EventEmitter<void>();
}
