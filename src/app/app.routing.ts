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
      import('./prototype-three/prototype-three.component').then(
        (m) => m.PrototypeThreeComponent
      ),
  },
  {
    path: 'prototype-4',
    loadComponent: () =>
      import('./prototype-four/prototype-four.component').then(
        (m) => m.PrototypeFourComponent
      ),
  },
  {
    path: 'text-editor',
    loadComponent: () =>
      import('./text-editor/text-editor.component').then(
        (m) => m.TextEditorComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'prototype-one',
  },
];
