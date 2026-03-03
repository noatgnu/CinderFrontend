import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbService } from './breadcrumb.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  template: `
    <nav class="breadcrumb-nav" aria-label="Breadcrumb" *ngIf="(breadcrumbService.breadcrumbs$ | async)?.length">
      <ol class="breadcrumb-list">
        <li class="breadcrumb-item">
          <a routerLink="/home" class="breadcrumb-link">
            <mat-icon class="home-icon">home</mat-icon>
          </a>
        </li>
        <li *ngFor="let breadcrumb of breadcrumbService.breadcrumbs$ | async; let last = last" class="breadcrumb-item">
          <mat-icon class="separator">chevron_right</mat-icon>
          <a *ngIf="!last" [routerLink]="breadcrumb.url" class="breadcrumb-link">
            {{ breadcrumb.label }}
          </a>
          <span *ngIf="last" class="breadcrumb-current" aria-current="page">
            {{ breadcrumb.label }}
          </span>
        </li>
      </ol>
    </nav>
  `,
  styles: [`
    .breadcrumb-nav {
      padding: 12px 24px;
      background-color: var(--mdc-theme-surface, #f5f5f5);
      border-bottom: 1px solid rgba(0,0,0,0.05);
    }
    
    .breadcrumb-list {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      align-items: center;
      flex-wrap: wrap;
    }
    
    .breadcrumb-item {
      display: flex;
      align-items: center;
      font-size: 13px;
      color: var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.6));
    }
    
    .breadcrumb-link {
      color: var(--mdc-theme-primary, #6750a4);
      text-decoration: none;
      font-weight: 500;
    }
    
    .breadcrumb-link:hover {
      text-decoration: underline;
    }
    
    .breadcrumb-current {
      font-weight: 600;
      color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));
    }
    
    .separator {
      font-size: 18px;
      width: 18px;
      height: 18px;
      margin: 0 4px;
      opacity: 0.5;
    }
    
    .home-icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
    }
  `]
})
export class BreadcrumbComponent {
  constructor(public breadcrumbService: BreadcrumbService) {}
}
