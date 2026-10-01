import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lab-activity-title',
  imports: [RouterLink],
  templateUrl: './activity-title.html',
  styleUrl: './activity-title.scss',
})
export class ActivityTitle {
  @Input() title: string = '';
  @Input() routerLink: string | any[] = '';
}
