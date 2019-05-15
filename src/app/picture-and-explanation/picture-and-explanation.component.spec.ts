import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureAndExplanationComponent } from './picture-and-explanation.component';

describe('PictureAndExplanationComponent', () => {
  let component: PictureAndExplanationComponent;
  let fixture: ComponentFixture<PictureAndExplanationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureAndExplanationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureAndExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
