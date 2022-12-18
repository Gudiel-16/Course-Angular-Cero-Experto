import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // Otra forma de hacer, pero puede crecer mucho
  // miFormulario: FormGroup = new FormGroup({
  //   nombre      : new FormControl('RTX 4080ti'),
  //   precio      : new FormControl(1500),
  //   existencias : new FormControl(5),
  // })

  miFormulario: FormGroup = this.fb.group({
    // por cada coma: [ name, sincronos, asincronos ]
    nombre: [ , [ Validators.required , Validators.minLength(3) ] ], 
    precio: [ , [ Validators.required, Validators.min(0) ] ],
    existencias: [ , [ Validators.required, Validators.min(0) ] ]
  })

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    this.miFormulario.reset({ // valores por defecto
      nombre: 'RTX 4080ti',
      precio: 1600
    })
  }

  campoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors 
            && this.miFormulario.controls[campo].touched;
  }

  guardar() {

    if ( this.miFormulario.invalid )  { // si no es valido
      this.miFormulario.markAllAsTouched(); // marca todo como si a sido tocado (para que muestre los errores en form)
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset(); // limpiamos formulario
  }

}
