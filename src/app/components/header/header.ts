import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'lab-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  imports: [RouterLink],
})
export class Header {

   title = 'Curso básico de Angular';
}
