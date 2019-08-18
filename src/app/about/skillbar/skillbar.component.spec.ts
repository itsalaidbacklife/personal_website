import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillbarComponent } from './skillbar.component';

describe('SkillbarComponent', () => {
  let component: SkillbarComponent;
  let fixture: ComponentFixture<SkillbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
