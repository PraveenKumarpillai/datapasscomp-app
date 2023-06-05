import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsvcComponent } from './parentsvc.component';

describe('ParentsvcComponent', () => {
  let component: ParentsvcComponent;
  let fixture: ComponentFixture<ParentsvcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentsvcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentsvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
