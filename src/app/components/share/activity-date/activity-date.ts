import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lab-activity-date',
  imports: [CommonModule],
  templateUrl: './activity-date.html',
  styleUrl: './activity-date.scss',
})
export class ActivityDate {
  @Input () date: string = '';
}
