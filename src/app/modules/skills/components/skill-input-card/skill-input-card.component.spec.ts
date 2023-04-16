import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillInputCardComponent } from './skill-input-card.component';

describe('SkillInputCardComponent', () => {
  let component: SkillInputCardComponent;
  let fixture: ComponentFixture<SkillInputCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillInputCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillInputCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
