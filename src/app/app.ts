import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'lab-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Curso básico de Angular';
  urlRepo = 'https://github.com/Alberto-SC-76/Angular_basic-lab.git'
  dateUpdated = new Date().getFullYear();
}
