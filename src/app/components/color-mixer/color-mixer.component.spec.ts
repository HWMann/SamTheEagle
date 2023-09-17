import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorMixerComponent } from './color-mixer.component';

describe('ColorMixerComponent', () => {
  let component: ColorMixerComponent;
  let fixture: ComponentFixture<ColorMixerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorMixerComponent]
    });
    fixture = TestBed.createComponent(ColorMixerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
