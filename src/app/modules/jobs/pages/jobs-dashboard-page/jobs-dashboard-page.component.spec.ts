import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDashboardPageComponent } from './jobs-dashboard-page.component';

describe('ExperienceDashboardPageComponent', () => {
  let component: ExperienceDashboardPageComponent;
  let fixture: ComponentFixture<ExperienceDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceDashboardPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
