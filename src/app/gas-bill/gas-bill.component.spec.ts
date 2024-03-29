import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasBillComponent } from './gas-bill.component';

describe('GasBillComponent', () => {
  let component: GasBillComponent;
  let fixture: ComponentFixture<GasBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GasBillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GasBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
