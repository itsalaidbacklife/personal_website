import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioNavComponent } from './portfolio-nav.component';

describe('PortfolioNavComponent', () => {
  let component: PortfolioNavComponent;
  let fixture: ComponentFixture<PortfolioNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
