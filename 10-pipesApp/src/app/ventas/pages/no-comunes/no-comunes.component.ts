import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Gudiel';
  genero: string = 'masculino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Hernando', 'Eduardo','Gudiel'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.', // cuando allan 0 clientes
    '=1': 'tenemos un cliente esperando.',        // cuando alla 1 cliente
    '=2': 'tenemos 2 clientes esperando.',        // cuando allan 2 clientes
    'other': 'tenemos # clientes esperando.'      // cuando allan 3 o mas clientes
  }

  // cambiando el genero y nombre para i18nSelect
  cambiarCliente() {
    this.nombre = 'Edna';
    this.genero = 'femenino';
  }

  // borramos ultimo cliente
  borrarCliente() {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Gudiel',
    edad: 27,
    direccion: 'Guatemala, Guatemala'
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ]

  // Async Pipe
  miObservable = interval(2000); // va emitir valores numericos: 0,1,2,3,4,5,6...

  valorPromesa = new Promise( (resolve, reject) => {

    setTimeout(() => {
      resolve( 'Tenemos data de promesa' );
    }, 3500 );

  });

}
