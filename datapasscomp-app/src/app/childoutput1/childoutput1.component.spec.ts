import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childoutput1Component } from './childoutput1.component';

describe('Childoutput1Component', () => {
  let component: Childoutput1Component;
  let fixture: ComponentFixture<Childoutput1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Childoutput1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Childoutput1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
