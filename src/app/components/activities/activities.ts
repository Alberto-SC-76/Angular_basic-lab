import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DATA } from '../data-repository';

@Component({
  selector: 'lab-activities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activities.html',
  styleUrl: './activities.scss',
})
export class Activities {
  activitys = DATA.activities;
  dataRepository = DATA;
  activitysPublished = this.activitys.filter((activity) => activity.status === 'published');
}
