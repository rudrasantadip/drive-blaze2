import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechphotographyComponent } from './techphotography.component';

describe('TechphotographyComponent', () => {
  let component: TechphotographyComponent;
  let fixture: ComponentFixture<TechphotographyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechphotographyComponent]
    });
    fixture = TestBed.createComponent(TechphotographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
