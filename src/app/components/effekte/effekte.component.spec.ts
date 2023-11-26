import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffekteComponent } from './effekte.component';

describe('EffekteComponent', () => {
  let component: EffekteComponent;
  let fixture: ComponentFixture<EffekteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EffekteComponent]
    });
    fixture = TestBed.createComponent(EffekteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
