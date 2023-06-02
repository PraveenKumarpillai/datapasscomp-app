import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentviewchildComponent } from './parentviewchild.component';

describe('ParentviewchildComponent', () => {
  let component: ParentviewchildComponent;
  let fixture: ComponentFixture<ParentviewchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentviewchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentviewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
