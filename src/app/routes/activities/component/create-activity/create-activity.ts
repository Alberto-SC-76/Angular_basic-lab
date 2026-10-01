import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lab-create-activity',
  standalone: true,
  templateUrl: './create-activity.html',
  styleUrl: './create-activity.scss',
})
export class CreateActivity {
  constructor(private router: Router) {}

  goToActivities(): void {
    this.router.navigate(['/activities']);
  }
}
