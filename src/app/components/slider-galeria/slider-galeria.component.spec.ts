import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderGaleriaComponent } from './slider-galeria.component';

describe('SliderGaleriaComponent', () => {
  let component: SliderGaleriaComponent;
  let fixture: ComponentFixture<SliderGaleriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderGaleriaComponent]
    });
    fixture = TestBed.createComponent(SliderGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
