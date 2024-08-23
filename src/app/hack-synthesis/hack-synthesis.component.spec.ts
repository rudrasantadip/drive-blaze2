import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackSynthesisComponent } from './hack-synthesis.component';

describe('HackSynthesisComponent', () => {
  let component: HackSynthesisComponent;
  let fixture: ComponentFixture<HackSynthesisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HackSynthesisComponent]
    });
    fixture = TestBed.createComponent(HackSynthesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
