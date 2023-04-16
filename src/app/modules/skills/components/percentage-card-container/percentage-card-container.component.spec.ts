import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageCardContainerComponent } from './percentage-card-container.component';

describe('PercentageCardContainerComponent', () => {
  let component: PercentageCardContainerComponent;
  let fixture: ComponentFixture<PercentageCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentageCardContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PercentageCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
