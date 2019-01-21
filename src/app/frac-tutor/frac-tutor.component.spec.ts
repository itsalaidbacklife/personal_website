import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FracTutorComponent } from './frac-tutor.component';

describe('FracTutorComponent', () => {
  let component: FracTutorComponent;
  let fixture: ComponentFixture<FracTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FracTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FracTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
