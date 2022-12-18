import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform( heroes: Heroe[], orderPor: string = 'sin valor' ): Heroe[] {

    switch( orderPor ) {

      case 'nombre': 
        // a,b para comparar elementos, a > b, retorna 1 para que haga el cambio y -1 si no queremos que haga el cambio
        return heroes.sort( (a,b) => ( a.nombre > b.nombre ) ? 1 : -1 );
      
      case 'vuela':
        return heroes.sort( (a,b) => ( a.vuela > b.vuela ) ? -1 : 1 ); // -1 : 1, ordena primero por los que vuela (descendente)

      case 'color':
        return heroes.sort( (a,b) => ( a.color > b.color ) ? 1 : -1 );

      default:
        return heroes;
    }

    // if( orderPor === 'sin valor' ) {
    //   return heroes;
    // } else {
    //   heroes = heroes.sort( (a,b) => ( a.nombre > b.nombre ) ? 1 : -1 );
    // }

    // return heroes;
  }

}
