import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillDashboardPageComponent } from './skill-dashboard-page.component';

describe('SkillDashboardPageComponent', () => {
  let component: SkillDashboardPageComponent;
  let fixture: ComponentFixture<SkillDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillDashboardPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
