import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoneducationalPortfolioComponent } from './noneducational-portfolio.component';

describe('NoneducationalPortfolioComponent', () => {
  let component: NoneducationalPortfolioComponent;
  let fixture: ComponentFixture<NoneducationalPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoneducationalPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoneducationalPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
