import { Component } from '@angular/core';
import { PresupuestoService } from '../../../../api/services/presupuesto/presupuesto.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrl: './ingresar-gasto.component.css'
})
export class IngresarGastoComponent {

  form: FormGroup;

  constructor(private _presupuestoService: PresupuestoService) {
  }

  ngOnInit(): void {
    this.iniciarForm();
  }

  iniciarForm() {
    this.form = new FormGroup({
      gasto: new FormControl('', [Validators.required]),
      cantidad: new FormControl('', [Validators.required, Validators.min(1), Validators.max(this._presupuestoService.restante)]),
    })
  }

  agregarGasto() {
    // Creamos el objeto
    const GASTO = {
      nombre: this.form.get('gasto').value,
      cantidad: this.form.get('cantidad').value
    }

    //  Enviamos el objeto a los suscriptores via subjet
    this._presupuestoService.agregarGasto(GASTO);

    // Reseteamos formulario
    this.form.reset()
  }

}
