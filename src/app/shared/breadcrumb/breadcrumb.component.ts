import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbService } from './breadcrumb.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, MatIconModule],
  template: `
    @if ((breadcrumbService.breadcrumbs$ | async)?.length) {
      <nav class="breadcrumb-nav" aria-label="Breadcrumb">
        <ol class="breadcrumb-list">
          <li class="breadcrumb-item">
            <a routerLink="/home" class="breadcrumb-link">
              <mat-icon class="home-icon">home</mat-icon>
            </a>
          </li>
          @for (breadcrumb of breadcrumbService.breadcrumbs$ | async; track breadcrumb; let last = $last) {
            <li class="breadcrumb-item">
              <mat-icon class="separator">chevron_right</mat-icon>
              @if (!last) {
                <a [routerLink]="breadcrumb.url" class="breadcrumb-link">
                  {{ breadcrumb.label }}
                </a>
              }
              @if (last) {
                <span class="breadcrumb-current" aria-current="page">
                  {{ breadcrumb.label }}
                </span>
              }
            </li>
          }
        </ol>
      </nav>
    }
    `,
  styles: [`
    .breadcrumb-nav {
      padding: 16px 50px;
      background-color: transparent;
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
      font-size: 14px;
      color: var(--app-text-secondary);
    }

    .breadcrumb-link {
      color: var(--app-primary-color);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s;
    }

    .breadcrumb-link:hover {
      color: var(--app-tertiary-color);
    }

    .breadcrumb-current {
      font-weight: 500;
      color: var(--app-text-color);
    }

    .separator {
      font-size: 20px;
      width: 20px;
      height: 20px;
      margin: 0 4px;
      color: var(--app-text-secondary);
      opacity: 0.5;
    }

    .home-icon {
      font-size: 20px;
      width: 20px;
      height: 20px;
      color: var(--app-primary-color);
    }
  `]
})
export class BreadcrumbComponent {
  constructor(public breadcrumbService: BreadcrumbService) {}
}
