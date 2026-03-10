import { Component, computed } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { WebsocketService } from '../../websocket.service';
import { MatIcon } from '@angular/material/icon';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-operation-center',
  imports: [DecimalPipe, MatIcon, MatProgressBar, MatIconButton],
  template: `
    @if (hasOperations()) {
      <div class="operation-dock">
        <div class="dock-header">
          <div class="header-left">
            <mat-icon class="header-icon">sync</mat-icon>
            <span class="header-title">{{ activeCount() }} active</span>
          </div>
          <button mat-icon-button (click)="isCollapsed = !isCollapsed" class="toggle-btn">
            <mat-icon>{{ isCollapsed ? 'expand_less' : 'expand_more' }}</mat-icon>
          </button>
        </div>

        @if (!isCollapsed) {
          <div class="operation-list">
            @for (op of ws.activeOperations(); track op.id) {
              <div class="operation-item">
                <div class="op-row">
                  <mat-icon class="op-type-icon" [class.search-op]="op.type === 'search'" [class.curtain-op]="op.type === 'curtain'">
                    {{ op.type === 'search' ? 'search' : 'analytics' }}
                  </mat-icon>
                  <div class="op-details">
                    <span class="op-label">{{ op.label || 'Operation' }}</span>
                    @if (op.message) {
                      <span class="op-message">{{ op.message }}</span>
                    }
                  </div>
                  <span class="op-percent" [class.visible]="op.progress > 0">{{ op.progress | number:'1.0-0' }}%</span>
                </div>
                <mat-progress-bar
                  [mode]="(op.progress > 0) ? 'determinate' : 'indeterminate'"
                  [value]="op.progress"
                  class="op-progress">
                </mat-progress-bar>
              </div>
            }
          </div>
        }
      </div>
    }
  `,
  styles: [`
    .operation-dock {
      position: fixed;
      bottom: 16px;
      right: 16px;
      width: 280px;
      z-index: 1000;
      background: var(--app-surface-color);
      border: 1px solid var(--app-outline-variant);
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
      overflow: hidden;
    }

    .dock-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 6px 8px 6px 12px;
      background: var(--app-surface-variant);
      border-bottom: 1px solid var(--app-outline-variant);
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .header-icon {
      font-size: 16px;
      width: 16px;
      height: 16px;
      color: var(--app-primary-color);
      animation: spin 1.5s linear infinite;
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .header-title {
      font-size: 12px;
      font-weight: 500;
      color: var(--app-text-color);
    }

    .toggle-btn {
      width: 28px;
      height: 28px;
      line-height: 28px;
    }

    .toggle-btn mat-icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
    }

    .operation-list {
      max-height: 200px;
      overflow-y: auto;
    }

    .operation-item {
      padding: 8px 12px;
      border-bottom: 1px solid var(--app-divider-color);
    }

    .operation-item:last-child {
      border-bottom: none;
    }

    .op-row {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      margin-bottom: 6px;
    }

    .op-type-icon {
      font-size: 14px;
      width: 14px;
      height: 14px;
      margin-top: 1px;
      color: var(--app-text-secondary);
    }

    .op-type-icon.search-op {
      color: var(--app-primary-color);
    }

    .op-type-icon.curtain-op {
      color: var(--app-secondary-color);
    }

    .op-details {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .op-label {
      font-size: 11px;
      font-weight: 500;
      color: var(--app-text-color);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .op-message {
      font-size: 10px;
      color: var(--app-text-secondary);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .op-percent {
      font-size: 10px;
      font-weight: 500;
      color: var(--app-text-secondary);
      opacity: 0;
      transition: opacity 0.2s;
    }

    .op-percent.visible {
      opacity: 1;
    }

    .op-progress {
      height: 3px;
      border-radius: 2px;
    }
  `]
})
export class OperationCenterComponent {
  isCollapsed = false;

  hasOperations = computed(() => this.ws.activeOperations().length > 0);
  activeCount = computed(() => this.ws.activeOperations().length);

  constructor(public ws: WebsocketService) {}
}
