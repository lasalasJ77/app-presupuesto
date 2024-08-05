import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresupuestoRoutingModule } from './presupuesto-routing.module';
import { GastosComponent } from './pages/gastos/gastos.component';
import { IngresarPresupuestoComponent } from './pages/ingresar-presupuesto/ingresar-presupuesto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IngresarGastoComponent } from './components/ingresar-gasto/ingresar-gasto.component';
import { ListarGastoComponent } from './components/listar-gasto/listar-gasto.component';


@NgModule({
  declarations: [
    GastosComponent,
    IngresarPresupuestoComponent,
    IngresarGastoComponent,
    ListarGastoComponent,
  ],
  imports: [
    CommonModule,
    PresupuestoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PresupuestoModule { }
