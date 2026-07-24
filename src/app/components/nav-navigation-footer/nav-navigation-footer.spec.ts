import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavNavigationFooter } from './nav-navigation-footer';

describe('NavNavigationFooter', () => {
  let component: NavNavigationFooter;
  let fixture: ComponentFixture<NavNavigationFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavNavigationFooter],
    }).compileComponents();

    fixture = TestBed.createComponent(NavNavigationFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
