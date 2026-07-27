import { Component } from '@angular/core';
import { NavNavigationFooter } from '../nav-navigation-footer/nav-navigation-footer';

@Component({
  selector: 'lab-footer',
  imports: [NavNavigationFooter,],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  dateUpdated = new Date().getFullYear();
}
