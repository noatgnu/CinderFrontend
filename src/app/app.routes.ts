import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'accounts',
    loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'project',
    loadChildren: () => import('./project/project.module').then(m => m.ProjectModule)
  },
  {
    path: 'analysis-group',
    loadChildren: () => import('./analysis-group/analysis-group.module').then(m => m.AnalysisGroupModule)
  },
  {
    path: 'search-session',
    loadChildren: () => import('./search-session/search-session.module').then(m => m.SearchSessionModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
