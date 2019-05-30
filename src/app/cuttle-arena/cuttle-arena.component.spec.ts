import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuttleArenaComponent } from './cuttle-arena.component';

describe('CuttleArenaComponent', () => {
  let component: CuttleArenaComponent;
  let fixture: ComponentFixture<CuttleArenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuttleArenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuttleArenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
