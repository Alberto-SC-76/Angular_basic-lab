import { Component, type OnInit } from '@angular/core';
import { RouterLink, RouterOutlet} from '@angular/router';


@Component({
  selector: 'lab-home-component',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {}
}
