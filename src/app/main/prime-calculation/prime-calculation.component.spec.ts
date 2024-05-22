import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeCalculationComponent } from './prime-calculation.component';

describe('PrimeCalculationComponent', () => {
  let component: PrimeCalculationComponent;
  let fixture: ComponentFixture<PrimeCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeCalculationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimeCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
