import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidtoggleComponent } from './slidtoggle.component';

describe('SlidtoggleComponent', () => {
  let component: SlidtoggleComponent;
  let fixture: ComponentFixture<SlidtoggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlidtoggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidtoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
