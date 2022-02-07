import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerRentabilidadComponent } from './per-rentabilidad.component';

describe('PerRentabilidadComponent', () => {
  let component: PerRentabilidadComponent;
  let fixture: ComponentFixture<PerRentabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerRentabilidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerRentabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
