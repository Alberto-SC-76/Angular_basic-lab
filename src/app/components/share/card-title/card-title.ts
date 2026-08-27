import { Component, Input } from '@angular/core';


@Component({
  selector: 'lab-card-title',
  imports: [],
  templateUrl: './card-title.html',
  styleUrl: './card-title.scss',
  standalone: true,
})
export class CardTitle {  
  @Input() cardTitle: string = '';

}
