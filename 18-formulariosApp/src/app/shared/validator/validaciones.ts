import { FormControl } from "@angular/forms";

// SE HACEN PARA VALIDACIONES SENCILLAS, DE LO CONTRARIO USAR UN SERVICIO

export const nombreApellidoPattern: string = '([a-zA-z]+) ([a-zA-z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const noPuedeSerStrider = ( control: FormControl ) => {
    const valor:string = control.value?.trim().toLowerCase();
    if ( valor === 'strider' ) {
      return {
        noStrider: true
      }
    } 

    return null;
}

// noPuedeSerStrider( control: FormControl ){
//     const valor:string = control.value?.trim().toLowerCase();
//     if (valor === 'strider'){
//       return {
//         noStrider: true
//       }
//     }
//     return null; // null: quiere decir que todo esta bien
//   }