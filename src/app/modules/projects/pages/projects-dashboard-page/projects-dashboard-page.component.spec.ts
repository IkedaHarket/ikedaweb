import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsDashboardPageComponent } from './projects-dashboard-page.component';

describe('ProjectsDashboardPageComponent', () => {
  let component: ProjectsDashboardPageComponent;
  let fixture: ComponentFixture<ProjectsDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsDashboardPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
