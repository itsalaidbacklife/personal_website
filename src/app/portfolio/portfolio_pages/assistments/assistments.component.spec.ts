import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistmentsComponent } from './assistments.component';

describe('AssistmentsComponent', () => {
  let component: AssistmentsComponent;
  let fixture: ComponentFixture<AssistmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
