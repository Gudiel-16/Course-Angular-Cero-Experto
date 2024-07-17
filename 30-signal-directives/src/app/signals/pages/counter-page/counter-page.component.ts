import { Component, computed, signal } from '@angular/core';


@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {

  public counter = signal(10);

  // 'squareCounter' estara pendiente de todas las signals interas, en este caso solo tiene a 'squareCounter'
  public squareCounter = computed( () => this.counter() * this.counter() ); // es una signal de solo lectura, por ejemplo ahora no se podra usar el set ni update

  increaseBy( value: number ) {

    // actualizamos la signal
    this.counter.update( current => current + value );
    // this.counter.set( this.counter() + value );

  }

}
