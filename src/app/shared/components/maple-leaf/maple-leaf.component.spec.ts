import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapleLeafComponent } from './maple-leaf.component';

describe('MapleLeafComponent', () => {
  let component: MapleLeafComponent;
  let fixture: ComponentFixture<MapleLeafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapleLeafComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapleLeafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
