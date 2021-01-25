import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaytableComponent } from './displaytable.component';

describe('DisplaytableComponent', () => {
  let component: DisplaytableComponent;
  let fixture: ComponentFixture<DisplaytableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaytableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
