import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lab-nav-navigation-footer',
  templateUrl: './nav-navigation-footer.html',
  styleUrl: './nav-navigation-footer.scss',
  imports: [RouterLink],
})
export class NavNavigationFooter {
  urlRepo = 'https://github.com/Alberto-SC-76/Angular_basic-lab.git';
  urlAngular = 'https://angular.dev/overview';
}
