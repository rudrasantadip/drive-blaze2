import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodersbrawlComponent } from './codersbrawl.component';

describe('CodersbrawlComponent', () => {
  let component: CodersbrawlComponent;
  let fixture: ComponentFixture<CodersbrawlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodersbrawlComponent]
    });
    fixture = TestBed.createComponent(CodersbrawlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
