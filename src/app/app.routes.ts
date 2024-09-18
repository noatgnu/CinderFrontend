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
    path: 'collate',
    loadChildren: () => import('./collate/collate.module').then(m => m.CollateModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
