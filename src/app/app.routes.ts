import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './routes/about-component/about-component';
import { ContactComponent } from './routes/contact-component/contact-component';
import { Activities } from './routes/activities/activities';



export const routes: Routes = [
  {
    path: '',
    component: Activities
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }