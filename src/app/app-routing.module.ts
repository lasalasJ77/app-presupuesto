import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarPresupuestoComponent } from './modules/presupuesto/pages/ingresar-presupuesto/ingresar-presupuesto.component';

const routes: Routes = [
  { 
    path : 'presupuesto', loadChildren : ()=>import('./modules/presupuesto/presupuesto.module').then((m)=>m.PresupuestoModule)
  },
  {
    path : '**', redirectTo : 'presupuesto'
  },
  // {
  //   path : '**', component : IngresarPresupuestoComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
