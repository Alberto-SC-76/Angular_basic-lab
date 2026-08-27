import { Component, Input } from '@angular/core';

@Component({
  selector: 'lab-activity-location',
  imports: [],
  templateUrl: './activity-location.html',
  styleUrl: './activity-location.scss',
})
export class ActivityLocation {
  @Input() location: string = '';

}
