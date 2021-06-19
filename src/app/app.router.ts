import { Routes } from '@angular/router';
import { routesComponents } from './const';

export const AppRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];
