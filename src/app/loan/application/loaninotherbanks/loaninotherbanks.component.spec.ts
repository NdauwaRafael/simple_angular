import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaninotherbanksComponent } from './loaninotherbanks.component';

describe('LoaninotherbanksComponent', () => {
  let component: LoaninotherbanksComponent;
  let fixture: ComponentFixture<LoaninotherbanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaninotherbanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaninotherbanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
