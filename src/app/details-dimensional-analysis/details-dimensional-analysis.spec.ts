import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDimensionalAnalysisComponent } from './details-dimensional-analysis.component';

describe('DetailsDimensionalAnalysisComponent', () => {
  let component: DetailsDimensionalAnalysisComponent;
  let fixture: ComponentFixture<DetailsDimensionalAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsDimensionalAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDimensionalAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
