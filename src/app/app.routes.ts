import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./routes/home-component/home-component').then((m) => m.HomeComponent),
  },

  {
    path: 'activities',
    children: [
      {
        path: '',
        loadComponent: () => import('./routes/activities/activities').then((m) => m.Activities),
      },
      {
        path: 'create',
        loadComponent: () =>
          import('./routes/activities/component/create-activity/create-activity').then(
            (m) => m.CreateActivity,
          ),
      },
      {
        path: ':slug',
        loadComponent: () =>
          import('./routes/activities/component/activity/activity').then((m) => m.Activity),
      },
    ],
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./routes/auth/RegisterComponent/RegisterComponent').then((m) => m.RegisterComponent),
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
            (m) => m.AboutHistory,
          ),
      },
      {
        path: 'team',
        loadComponent: () =>
          import('./routes/about-component/about-team/about-team').then((m) => m.AboutTeam),
      },
    ],
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./routes/contact-component/contact-component').then((m) => m.ContactComponent),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

/* @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } */
