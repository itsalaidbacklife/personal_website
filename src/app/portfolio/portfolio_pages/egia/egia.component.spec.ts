import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgiaComponent } from './egia.component';

describe('EgiaComponent', () => {
  let component: EgiaComponent;
  let fixture: ComponentFixture<EgiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
