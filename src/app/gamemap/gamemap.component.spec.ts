import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamemapComponent } from './gamemap.component';

describe('GamemapComponent', () => {
  let component: GamemapComponent;
  let fixture: ComponentFixture<GamemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamemapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
