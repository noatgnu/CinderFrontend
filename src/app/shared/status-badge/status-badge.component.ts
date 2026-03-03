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
    
    .primary { background-color: var(--mdc-theme-primary, #6750a4); color: white; }
    .secondary { background-color: var(--mdc-theme-secondary, #625b71); color: white; }
    .tertiary { background-color: var(--mdc-theme-tertiary, #7d5260); color: white; }
    .error { background-color: var(--mdc-theme-error, #b3261e); color: white; }
    .outline { border: 1px solid currentColor; background: transparent; }
  `]
})
export class StatusBadgeComponent {
  @Input() label: string = '';
  @Input() type: 'primary' | 'secondary' | 'tertiary' | 'error' | 'outline' = 'primary';

  get colorClass(): string {
    return this.type;
  }
}
