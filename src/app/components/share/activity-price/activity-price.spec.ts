import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityPrice } from './activity-price';

describe('ActivityPrice', () => {
  let component: ActivityPrice;
  let fixture: ComponentFixture<ActivityPrice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityPrice],
    }).compileComponents();

    fixture = TestBed.createComponent(ActivityPrice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
