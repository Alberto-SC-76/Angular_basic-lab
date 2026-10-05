import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'lab-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  imports: [RouterLink],
})
export class Header {
  title = 'Curso básico de Angular';

  constructor(private location: Location) {}

  goToABack(): void {
    this.location.back();
  }
}
