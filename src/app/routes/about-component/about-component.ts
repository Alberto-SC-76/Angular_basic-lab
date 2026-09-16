import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'lab-about-component',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './about-component.html',
  styleUrl: './about-component.scss',
})
export class AboutComponent {}
