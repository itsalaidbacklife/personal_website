import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuttleOverviewComponent } from './cuttle-overview.component';

describe('CuttleOverviewComponent', () => {
  let component: CuttleOverviewComponent;
  let fixture: ComponentFixture<CuttleOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuttleOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuttleOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
