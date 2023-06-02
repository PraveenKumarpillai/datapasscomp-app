import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parentoutput1Component } from './parentoutput1.component';

describe('Parentoutput1Component', () => {
  let component: Parentoutput1Component;
  let fixture: ComponentFixture<Parentoutput1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Parentoutput1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parentoutput1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
