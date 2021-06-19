import { Routes } from '@angular/router';
import { routesComponents } from '../const';

export const ComponentsRoutes: Routes = [
  {
    path: routesComponents.home,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: routesComponents.editorials,
    loadChildren: () =>
      import('./editorial/editorial.module').then((m) => m.EditorialModule),
  },
];
