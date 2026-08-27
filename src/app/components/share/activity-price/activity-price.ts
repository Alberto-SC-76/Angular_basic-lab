import { Component, Input } from '@angular/core';

@Component({
  selector: 'lab-activity-price',
  imports: [],
  templateUrl: './activity-price.html',
  styleUrl: './activity-price.scss',
})
export class ActivityPrice {
  @Input() price: string = '';
  
}
