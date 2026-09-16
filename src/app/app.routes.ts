
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./routes/activities/activities').then((m) => m.Activities),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./routes/about-component/about-component').then((m) => m.AboutComponent),
     children: [      
      {
        path: 'history',
        loadComponent: () =>
          import('./routes/about-component/about-history/about-history').then(
            (m) => m.AboutHistory
          ),
      },
      {
        path: 'team',
        loadComponent: () =>
          import('./routes/about-component/about-team/about-team').then(
            (m) => m.AboutTeam
          ),
      },
    ],
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./routes/contact-component/contact-component').then((m) => m.ContactComponent),
  },
];

/* @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } */