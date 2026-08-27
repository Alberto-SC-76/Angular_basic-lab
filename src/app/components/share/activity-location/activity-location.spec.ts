import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityLocation } from './activity-location';

describe('ActivityLocation', () => {
  let component: ActivityLocation;
  let fixture: ComponentFixture<ActivityLocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityLocation],
    }).compileComponents();

    fixture = TestBed.createComponent(ActivityLocation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
