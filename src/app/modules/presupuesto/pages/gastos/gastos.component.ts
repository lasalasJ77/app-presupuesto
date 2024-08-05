import { Component } from '@angular/core';
import { PresupuestoService } from '../../../../api/services/presupuesto/presupuesto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.css'
})
export class GastosComponent {

  constructor(private _presupuestoService: PresupuestoService,
    private router: Router) { }

  ngOnInit(): void {
    if (this._presupuestoService.presupuesto === 0) {
      this.router.navigate(['/ingresar-presupuesto']);
    }
  }
}
