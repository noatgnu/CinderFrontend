import { Routes } from '@angular/router';
import {CollateModule} from "./collate/collate.module";
import {SearchSessionModule} from "./search-session/search-session.module";
import {HomeModule} from "./home/home.module";
import { AccountsModule } from './accounts/accounts.module';
import {ProjectModule} from "./project/project.module";
import {AnalysisGroupModule} from "./analysis-group/analysis-group.module";
import {UserModule} from "./user/user.module";
import {AdminModule} from "./admin/admin.module";

export const routes: Routes = [
  {
    path: 'accounts',
    loadChildren: () => AccountsModule
  },
  {
    path: 'home',
    loadChildren: () => HomeModule
  },
  {
    path: 'project',
    loadChildren: () => ProjectModule
  },
  {
    path: 'analysis-group',
    loadChildren: () => AnalysisGroupModule
  },
  {
    path: 'search-session',
    loadChildren: ()=> SearchSessionModule
  },
  {
    path: 'collate',
    //loadChildren: () => import('./collate/collate.module').then(m => m.CollateModule)
    loadChildren: () => CollateModule
  },
  {
    path: 'admin',
    loadChildren: () => AdminModule
  },
  {
    path: 'user',
    loadChildren: () => UserModule
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
