import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildoutComponent } from './childout.component';

describe('ChildoutComponent', () => {
  let component: ChildoutComponent;
  let fixture: ComponentFixture<ChildoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
