import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvenorComponent } from './convenor.component';

describe('ConvenorComponent', () => {
  let component: ConvenorComponent;
  let fixture: ComponentFixture<ConvenorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvenorComponent]
    });
    fixture = TestBed.createComponent(ConvenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
