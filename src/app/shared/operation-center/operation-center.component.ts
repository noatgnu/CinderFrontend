import { Component, computed } from '@angular/core';

import { WebsocketService } from '../../websocket.service';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-operation-center',
  standalone: true,
  imports: [MatIconModule, MatProgressBarModule, MatButtonModule, MatCardModule],
  template: `
    @if (hasOperations()) {
      <div class="operation-dock" [class.collapsed]="isCollapsed">
        <mat-card class="operation-card">
          <mat-card-header class="operation-header">
            <mat-card-title>
              <mat-icon class="title-icon">hourglass_empty</mat-icon>
              Active Operations ({{ activeCount() }})
            </mat-card-title>
            <button mat-icon-button (click)="isCollapsed = !isCollapsed">
              <mat-icon>{{ isCollapsed ? 'expand_less' : 'expand_more' }}</mat-icon>
            </button>
          </mat-card-header>
          @if (!isCollapsed) {
            <mat-card-content class="operation-content">
              <div class="operation-list">
                @for (op of ws.activeOperations(); track op.id) {
                  <div class="operation-item">
                    <div class="op-info">
                      <span class="op-label">{{ op.label || 'Operation' }}</span>
                      <span class="op-status">{{ op.status }}</span>
                    </div>
                    @if (op.message) {
                      <div class="op-message">{{ op.message }}</div>
                    }
                    <mat-progress-bar
                      [mode]="op.progress > 0 ? 'determinate' : 'indeterminate'"
                      [value]="op.progress"
                      [color]="op.type === 'search' ? 'primary' : 'accent'">
                    </mat-progress-bar>
                  </div>
                }
              </div>
            </mat-card-content>
          }
        </mat-card>
      </div>
    }
    `,
  styles: [`
    .operation-dock {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 320px;
      z-index: 1000;
      transition: transform 0.3s ease-in-out;
    }
    
    .operation-card {
      background-color: var(--mdc-elevated-card-container-color, #fff);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      border-radius: 12px;
      overflow: hidden;
    }
    
    .operation-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 16px;
      background-color: var(--mdc-theme-surface, #f5f5f5);
      border-bottom: 1px solid rgba(0,0,0,0.05);
    }
    
    .operation-header mat-card-title {
      display: flex;
      align-items: center;
      font-size: 14px;
      margin: 0;
    }
    
    .title-icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
      margin-right: 8px;
    }
    
    .operation-content {
      max-height: 400px;
      overflow-y: auto;
      padding: 0 !important;
    }
    
    .operation-list {
      display: flex;
      flex-direction: column;
    }
    
    .operation-item {
      padding: 12px 16px;
      border-bottom: 1px solid rgba(0,0,0,0.05);
    }
    
    .operation-item:last-child {
      border-bottom: none;
    }
    
    .op-info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 4px;
    }
    
    .op-label {
      font-weight: 600;
      font-size: 12px;
    }
    
    .op-status {
      font-size: 10px;
      text-transform: uppercase;
      color: var(--mdc-theme-text-secondary-on-background);
    }
    
    .op-message {
      font-size: 11px;
      margin-bottom: 8px;
      color: var(--mdc-theme-text-secondary-on-background);
    }
  `]
})
export class OperationCenterComponent {
  isCollapsed = false;
  
  hasOperations = computed(() => this.ws.activeOperations().length > 0);
  activeCount = computed(() => this.ws.activeOperations().length);

  constructor(public ws: WebsocketService) {}
}
