import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchPanelComponent } from './switch-panel.component';

describe('SwitchPanelComponent', () => {
  let component: SwitchPanelComponent;
  let fixture: ComponentFixture<SwitchPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchPanelComponent]
    });
    fixture = TestBed.createComponent(SwitchPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
