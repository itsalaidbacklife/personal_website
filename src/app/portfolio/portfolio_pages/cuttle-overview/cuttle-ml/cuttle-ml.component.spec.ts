import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuttleMLComponent } from './cuttle-ml.component';

describe('CuttleMLComponent', () => {
  let component: CuttleMLComponent;
  let fixture: ComponentFixture<CuttleMLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuttleMLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuttleMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
