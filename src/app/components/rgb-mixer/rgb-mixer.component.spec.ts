import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgbMixerComponent } from './rgb-mixer.component';

describe('RgbMixerComponent', () => {
  let component: RgbMixerComponent;
  let fixture: ComponentFixture<RgbMixerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RgbMixerComponent]
    });
    fixture = TestBed.createComponent(RgbMixerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
