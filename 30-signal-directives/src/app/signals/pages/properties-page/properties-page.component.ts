import { Component, OnDestroy, OnInit, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component( {
  templateUrl: './properties-page.component.html',
  styleUrls: [ './properties-page.component.css' ]
} )
export class PropertiesPageComponent implements OnDestroy, OnInit {

  public counter = signal( 10 );

  public user = signal<User>( {
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg'
  } );

  // signal solo lectura, no se puede usar el set o update
  public fullName = computed( () => `${ this.user().first_name } ${ this.user().last_name }` );

  // efectos, se ejecuta cuando la dependencia cambia, la primera vez se ejecuta cuando se carga el componente
  // se va ejecutar cuando el user o el counter cambie tambien
  public userChangedEffect = effect( () => {
    // Todo: Descomentar esta línea
    console.log( `${ this.user().first_name } - ${ this.counter() } ` );
  } );

  ngOnInit(): void {
    // el intervalo no se limpia solo
    setInterval( () => {
      this.counter.update( current => current + 1 );

      // if ( this.counter() == 15 )
      //   this.userChangedEffect.destroy(); // destruye el efecto
    }, 1000 );
  }

  ngOnDestroy(): void {
    // this.userChangedEffect.destroy();
  }

  increaseBy( value: number ) {
    this.counter.update( current => current + value );
  }

  // keyof User: para indicar que tiene que ser una propiedad de User
  onFieldUpdated( field: keyof User, value: string ) {

    // una forma de actualizar
    // this.user.set({
    //   ...this.user(),
    //   [field]: value,
    // });

    // seria lo mismo que lo anterior
    // this.user.update( current => ({
    //   ...current,
    //   [field]: value
    // }))

    // para que cualquier otro valor que se enviado lo ignore
    this.user.update( current => {

      switch ( field ) {

        case 'email':
          current.email = value;
          break;

        case 'avatar':
          current.avatar = value;
          break;

        case 'first_name':
          current.first_name = value;
          break;

        case 'last_name':
          current.last_name = value;
          break;

        case 'id':
          current.id = Number( value );
        break;
      }

      return current;
    } );




  }

}
