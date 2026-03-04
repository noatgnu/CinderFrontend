import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="status-badge" [ngClass]="colorClass">
      <slot></slot>
      {{ label }}
    </span>
  `,
  styles: [`
    .status-badge {
      display: inline-flex;
      align-items: center;
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .primary { background-color: var(--app-primary-color); color: var(--app-on-primary); }
    .secondary { background-color: var(--app-secondary-color); color: white; }
    .tertiary { background-color: var(--app-tertiary-color); color: white; }
    .error { background-color: var(--app-error-color); color: white; }
    .outline { border: 1px solid var(--app-outline-color); background: transparent; color: var(--app-text-color); }
  `]
})
export class StatusBadgeComponent {
  @Input() label: string = '';
  @Input() type: 'primary' | 'secondary' | 'tertiary' | 'error' | 'outline' = 'primary';

  get colorClass(): string {
    return this.type;
  }
}
