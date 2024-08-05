import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarPresupuestoComponent } from './pages/ingresar-presupuesto/ingresar-presupuesto.component';
import { GastosComponent } from './pages/gastos/gastos.component';

const routes: Routes = [
  {
    path : '', children : [
      {path : 'ingresar-presupuesto', component : IngresarPresupuestoComponent},
      {path : 'gastos', component : GastosComponent},
      {path : '**', redirectTo : 'ingresar-presupuesto'}
    ]
  }
];

// { path: '', redirectTo: '/ingresarPresupuesto', pathMatch: 'full' },
// { path: 'ingresarPresupuesto', component: IngresarPresupuestoComponent },
// { path: 'gastos', component: GastosComponent },
// { path: '**', redirectTo: '/ingresarPresupuesto', pathMatch: 'full'  }

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresupuestoRoutingModule { }
