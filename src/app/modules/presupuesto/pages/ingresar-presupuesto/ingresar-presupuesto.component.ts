import { Component } from '@angular/core';
import { PresupuestoService } from '../../../../api/services/presupuesto/presupuesto.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrl: './ingresar-presupuesto.component.css'
})
export class IngresarPresupuestoComponent {

  form:FormGroup;

  constructor(private _presupuestoService: PresupuestoService, 
              private router: Router) { 
  }

  ngOnInit(): void {
    this.iniciarForm();
  }

  iniciarForm(){
    this.form = new FormGroup({
      presupuesto : new FormControl('', [Validators.required, Validators.min(1)])
    })
  }

  agregar() {
      this._presupuestoService.presupuesto = this.form.get('presupuesto').value ;
      this._presupuestoService.restante = this.form.get('presupuesto').value ;
      this.router.navigate(['presupuesto/gastos'])
  }


}
