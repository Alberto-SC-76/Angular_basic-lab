import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityAgeCategory } from './activity-age-category';

describe('ActivityAgeCategory', () => {
  let component: ActivityAgeCategory;
  let fixture: ComponentFixture<ActivityAgeCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityAgeCategory],
    }).compileComponents();

    fixture = TestBed.createComponent(ActivityAgeCategory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
