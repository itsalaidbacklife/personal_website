import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuttleBotComponent } from './cuttle-bot.component';

describe('CuttleBotComponent', () => {
  let component: CuttleBotComponent;
  let fixture: ComponentFixture<CuttleBotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuttleBotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuttleBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
