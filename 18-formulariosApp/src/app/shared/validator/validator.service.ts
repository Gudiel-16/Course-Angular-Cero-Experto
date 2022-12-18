import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  nombreApellidoPattern: string = '([a-zA-z]+) ([a-zA-z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  noPuedeSerStrider( control: FormControl ): ValidationErrors | null {
    const valor:string = control.value?.trim().toLowerCase();
    if (valor === 'strider'){
      return {
        noStrider: true
      }
    }
    return null; // null: quiere decir que todo esta bien
  }

  camposIguales( campo1: string, campo2: string ) {

    return ( formGroup: AbstractControl ): ValidationErrors | null => {

      // obtengo valores de los campos
      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      // comparamos password
      if ( pass1 !== pass2 ) {
        formGroup.get(campo2)?.setErrors({ noIguales: true }); // agregamos error en el campo2 (password2)
        return { noIguales: true }
      } 

      // OJO: Si tuvieramos otra validacion, al hacer esto tambien eliminaria los demas errores
      formGroup.get(campo2)?.setErrors(null); // al ser iguales limpiamos errores en el campo2 (password2)

      return null
    }

  }

}
