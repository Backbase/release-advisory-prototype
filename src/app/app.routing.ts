import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'prototype-one',
    loadComponent: () =>
      import('./usecase-one/usecase-one.component').then(
        (m) => m.UsecaseOneComponent
      ),
  },
  {
    path: 'prototype-two',
    loadComponent: () =>
      import('./usecase-two/usecase-two.component').then(
        (m) => m.UsecaseTwoComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
