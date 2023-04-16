import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickColorComponent } from './pick-color.component';

describe('PickColorComponent', () => {
  let component: PickColorComponent;
  let fixture: ComponentFixture<PickColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
