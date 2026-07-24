import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DATA } from './components/data-repository';
import { NavNavigationFooter } from './components/nav-navigation-footer/nav-navigation-footer';

@Component({
  selector: 'lab-root',
  standalone: true,
  imports: [RouterOutlet, NavNavigationFooter, DatePipe, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  title = 'Curso básico de Angular';
  dateUpdated = new Date().getFullYear();
  activitys = DATA.activities;
  dataRepository = DATA;
  activitysPublished = this.activitys.filter((activity) => activity.status === 'published');

  mostrar = false;

  toggle() {
    this.mostrar = !this.mostrar;
  }
}
