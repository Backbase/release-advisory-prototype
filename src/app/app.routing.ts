import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'prototype-one',
    pathMatch: 'full',
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
    path: 'prototype-three',
    loadComponent: () =>
      import('./random-data/random-data.component').then(
        (m) => m.RandomDataComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'prototype-one',
  },
];
