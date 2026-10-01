import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lab-activity',
  imports: [],
  templateUrl: './activity.html',
  styleUrl: './activity.scss',
})
export class Activity {
  activitySlug: string | null = null;
  constructor(route: ActivatedRoute) {
    this.activitySlug = route.snapshot.paramMap.get('slug') || 'no slug provided';
  }
}
