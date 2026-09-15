import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lab-activity-price',
  imports: [CommonModule],
  templateUrl: './activity-price.html',
  styleUrl: './activity-price.scss',
})
export class ActivityPrice {
  @Input() price: number = 0;
  @Input() currency: string = '';  
}
