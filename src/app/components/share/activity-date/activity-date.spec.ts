import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityDate } from './activity-date';

describe('ActivityDate', () => {
  let component: ActivityDate;
  let fixture: ComponentFixture<ActivityDate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityDate],
    }).compileComponents();

    fixture = TestBed.createComponent(ActivityDate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
