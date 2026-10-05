import { Component, type OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'lab-home-component',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {}
}
