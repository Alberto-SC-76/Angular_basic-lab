import { Component, Input } from '@angular/core';
import { DATA } from '../../data-repository';


@Component({
  selector: 'lab-activity-age-category',
  imports: [],
  templateUrl: './activity-age-category.html',
  styleUrl: './activity-age-category.scss',
})
export class ActivityAgeCategory {
  @Input() ageCategory: string = '';
  private ageCategories = DATA.ageCategories;

  private defaultCategory = {caption: 'Unknown', icon: '❓', id: 'unknown', userId: 1};

  getIcon() { 
    return this.ageCategories.find((icon) => icon.id === this.ageCategory)?.icon || this.defaultCategory.icon;
  }
}
