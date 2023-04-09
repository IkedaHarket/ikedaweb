import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDashboardPageComponent } from './album-dashboard-page.component';

describe('AlbumDashboardPageComponent', () => {
  let component: AlbumDashboardPageComponent;
  let fixture: ComponentFixture<AlbumDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumDashboardPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
