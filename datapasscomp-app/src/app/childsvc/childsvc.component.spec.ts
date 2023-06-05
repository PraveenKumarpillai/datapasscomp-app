import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildsvcComponent } from './childsvc.component';

describe('ChildsvcComponent', () => {
  let component: ChildsvcComponent;
  let fixture: ComponentFixture<ChildsvcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildsvcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildsvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
