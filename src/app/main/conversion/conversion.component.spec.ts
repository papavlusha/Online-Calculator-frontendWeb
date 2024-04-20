import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionComponent } from './conversion.component';

describe('ConversionComponent', () => {
  let component: ConversionComponent;
  let fixture: ComponentFixture<ConversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
