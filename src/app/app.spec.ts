import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should define create as a child route of activities', () => {
    const activitiesRoute = routes.find((route) => route.path === 'activities');

    expect(activitiesRoute).toBeTruthy();
    expect(activitiesRoute?.children).toContainEqual(
      expect.objectContaining({
        path: 'create',
      }),
    );
  });
});
