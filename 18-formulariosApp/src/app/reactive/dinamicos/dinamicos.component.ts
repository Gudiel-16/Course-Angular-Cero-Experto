import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    // por cada coma: [ name, sincronos, asincronos ]
    nombre: [ , [ Validators.required , Validators.minLength(3) ] ],
    favoritos: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required]
    ], Validators.required)
  });

  // creamos un favorito, para cuando escriban un nuevo favorito y se enlaza en input de .html 'favoritos'
  nuevoFavorito: FormControl = this.fb.control('', Validators.required );

  // acceder a las propiedades de favoritos
  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray; // hacemos referencia a la propiedad 'favoritos'
  }

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  campoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors 
            && this.miFormulario.controls[campo].touched;
  }

  agregarFavorito() {
    if ( this.nuevoFavorito.invalid ) { return; } // validamos que el form sea valido

    // this.favoritosArr.push( new FormControl( this.nuevoFavorito.value, Validators.required ) );
    this.favoritosArr.push( this.fb.control(this.nuevoFavorito.value, Validators.required ) );

    this.nuevoFavorito.reset();

  }

  borrar( i: number ) {
    this.favoritosArr.removeAt(i);
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
