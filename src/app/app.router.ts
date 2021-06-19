import { Routes } from '@angular/router';
import { routesComponents } from './const';

export const AppRoutes: Routes = [
  {
    path: routesComponents.home,
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
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
