import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsSectionComponent } from './chips-section.component';

describe('ChipsSectionComponent', () => {
  let component: ChipsSectionComponent;
  let fixture: ComponentFixture<ChipsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChipsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
