import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechtitantakedownComponent } from './techtitantakedown.component';

describe('TechtitantakedownComponent', () => {
  let component: TechtitantakedownComponent;
  let fixture: ComponentFixture<TechtitantakedownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechtitantakedownComponent]
    });
    fixture = TestBed.createComponent(TechtitantakedownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
