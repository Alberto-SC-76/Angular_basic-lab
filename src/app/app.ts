import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DATA } from './components/data-repository';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'lab-root',
  standalone: true,
  imports: [
    RouterOutlet,    
    DatePipe,
    CommonModule,
    Header,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App { 
  
  activitys = DATA.activities;
  dataRepository = DATA;
  activitysPublished = this.activitys.filter((activity) => activity.status === 'published');

  mostrar = false;

  toggle() {
    this.mostrar = !this.mostrar;
  }
}
