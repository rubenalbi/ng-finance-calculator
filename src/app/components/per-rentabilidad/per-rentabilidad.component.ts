import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-per-rentabilidad',
  templateUrl: './per-rentabilidad.component.html',
  styleUrls: ['./per-rentabilidad.component.css']
})
export class PerRentabilidadComponent implements OnInit {
  form: FormGroup;
  per: number = 0;
  rentabilidad: number = 0;
  rentabilidadDividend: number = 0;
  estimatedGrowth: number = 0;

  constructor() { 
    this.form = new FormGroup({
      price: new FormControl('', [
        Validators.required
      ]),
      eps: new FormControl('', [
        Validators.required
      ]),
      dividend: new FormControl('', [
        Validators.required
      ]),
      estimatedGrowth: new FormControl('', [
        Validators.required
      ])
    })
  }

  ngOnInit(): void {
  }

  guardar() {
    console.log(this.form.getRawValue());

    this.per = this.form.getRawValue().price / this.form.getRawValue().eps
    this.rentabilidad = (this.form.getRawValue().eps / this.form.getRawValue().price) * 100;
    this.rentabilidadDividend = (this.form.getRawValue().dividend / this.form.getRawValue().price) * 100;
  }

  calcularBpa5(bpaActual: number, growth: number): number {
    // for (let index = 0; index < 5; index++) {
    //   number = number*1,08
      
    // }

    return 0;
  }

}
