import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PerRentabilidadComponent } from './components/per-rentabilidad/per-rentabilidad.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'per-ratio',
    component: PerRentabilidadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
