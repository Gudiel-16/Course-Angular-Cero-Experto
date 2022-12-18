import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: [ 'M', Validators.required ],
    notificaciones: [ true, Validators.required ],
    condiciones: [ false, Validators.requiredTrue ] // requiredTrue: para que siempre sea true
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  }

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    // Establecemos los valores al formularios que tiene el objeto persona
    this.miFormulario.reset({ 
      ...this.persona,
      condiciones: false // damos un valor a condiciones para que no sea null cuando se haga el reset (ya que en persona no existe esa propiedad)
    });

    // Sincronizamos form al objeto persona, Nos subscribrimos a los cambios del formuario y asignamos valor al objeto persona
    this.miFormulario.valueChanges.subscribe( ({ condiciones, ...rest }) => {
      // delete form.condiciones;
      this.persona = rest;
    })
    
    // this.miFormulario.get('condiciones')?.valueChanges.subscribe( newValue => {
    //   console.log(newValue);
    // })
  }

  guardar() {

    const formValue = { ...this.miFormulario.value };  // obtenemos datos del formlario
    delete formValue.condiciones; // eliminamos propiedad del objeto

    this.persona = formValue; // asignamos
  }
}
