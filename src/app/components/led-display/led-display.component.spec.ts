import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedDisplayComponent } from './led-display.component';

describe('LedDisplayComponent', () => {
  let component: LedDisplayComponent;
  let fixture: ComponentFixture<LedDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LedDisplayComponent]
    });
    fixture = TestBed.createComponent(LedDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
