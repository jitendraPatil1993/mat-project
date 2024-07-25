import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeSectionComponent } from './badge-section.component';

describe('BadgeSectionComponent', () => {
  let component: BadgeSectionComponent;
  let fixture: ComponentFixture<BadgeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BadgeSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
