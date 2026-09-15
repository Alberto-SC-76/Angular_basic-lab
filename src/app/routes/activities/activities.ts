import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';






import { CardTitle } from '../../components/share/card-title/card-title';
import { ActivityTitle } from '../../components/share/activity-title/activity-title';
import { ActivityAgeCategory } from '../../components/share/activity-age-category/activity-age-category';
import { ActivityDate } from '../../components/share/activity-date/activity-date';
import { ActivityLocation } from '../../components/share/activity-location/activity-location';
import { ActivityPrice } from '../../components/share/activity-price/activity-price';
import { DATA } from '../../components/data-repository';

@Component({
  selector: 'lab-activities',
  standalone: true,
  imports: [CommonModule, CardTitle, ActivityTitle, ActivityAgeCategory, ActivityLocation, ActivityDate, ActivityPrice],
  templateUrl: './activities.html',
  styleUrls: ['./activities.scss'],
})
export class Activities {
  activitys = DATA.activities;
  dataRepository = DATA;
  activitysPublished = this.activitys.filter((activity) => activity.status === 'published');

  //@Input() title: string = '';

 /*  getTitle() {
    return 'Actividades Publicadas ' + this.activitys.length;
  } */
}
