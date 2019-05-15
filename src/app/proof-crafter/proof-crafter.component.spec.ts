import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofCrafterComponent } from './proof-crafter.component';

describe('ProofCrafterComponent', () => {
  let component: ProofCrafterComponent;
  let fixture: ComponentFixture<ProofCrafterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProofCrafterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProofCrafterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
