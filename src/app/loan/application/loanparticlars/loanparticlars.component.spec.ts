import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanparticlarsComponent } from './loanparticlars.component';

describe('LoanparticlarsComponent', () => {
  let component: LoanparticlarsComponent;
  let fixture: ComponentFixture<LoanparticlarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanparticlarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanparticlarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
