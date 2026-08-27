import { Component, Input } from '@angular/core';

@Component({
  selector: 'lab-activity-title',
  imports: [],
  templateUrl: './activity-title.html',
  styleUrl: './activity-title.scss',
})
export class ActivityTitle {
  @Input() title: string = '';
}
