import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityTitle } from './activity-title';

describe('ActivityTitle', () => {
  let component: ActivityTitle;
  let fixture: ComponentFixture<ActivityTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityTitle],
    }).compileComponents();

    fixture = TestBed.createComponent(ActivityTitle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
