import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // Obtengo formulario, para acceder a propiedades
  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'RTX 4080ti',
    precio: 10,
    existencias: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls["producto"]?.invalid // si es valido
            && this.miFormulario?.controls["producto"]?.touched; // si a sido tocado
  }

  precioValido(): boolean {
    return this.miFormulario?.controls["precio"]?.touched // si a sido tocado
            && this.miFormulario?.controls["precio"]?.value < 0; // valor menor a 0
  }

  // guardar(miFormulario: NgForm) {
  guardar(){
    console.log(this.miFormulario)
    console.log(this.miFormulario.errors )
    this.miFormulario.resetForm({ // reset form, con valores que necesitemos
      producto: 'Algo',
      precio: 0,
      existencias: 0
    });
  }

}
