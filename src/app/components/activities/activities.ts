import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DATA } from '../data-repository';
import { CardTitle } from '../share/card-title/card-title';
import { ActivityAgeCategory } from '../share/activity-age-category/activity-age-category';
import { ActivityLocation } from '../share/activity-location/activity-location';
import { ActivityDate } from '../share/activity-date/activity-date';
import { ActivityPrice } from "../share/activity-price/activity-price";
import { ActivityTitle } from '../share/activity-title/activity-title';

@Component({
  selector: 'lab-activities',
  standalone: true,
  imports: [CommonModule, CardTitle, ActivityTitle, ActivityAgeCategory, ActivityLocation, ActivityDate, ActivityPrice],
  templateUrl: './activities.html',
  styleUrl: './activities.scss',
})
export class Activities {
  activitys = DATA.activities;
  dataRepository = DATA;
  activitysPublished = this.activitys.filter((activity) => activity.status === 'published');
}
