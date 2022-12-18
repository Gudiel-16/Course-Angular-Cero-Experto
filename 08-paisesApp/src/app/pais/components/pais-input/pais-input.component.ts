import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter(); // Emitimos evento, para enviar el termino hacia el componente 'por-pais'
  @Output() onDebounce: EventEmitter<string> = new EventEmitter(); // Emitimos, cuando la persona deja de escribir

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(300)) // debounceTime: cuantas milesimas de segundas esperar, antes que se emita el valor
      .subscribe( valor => { // se suscribe, para cuando se use el .next
        this.onDebounce.emit( valor );
      });
  }

  buscar(){
    this.onEnter.emit( this.termino );
  }

  teclaPresionada() {
    this.debouncer.next( this.termino ); // emitimos valor
  }

}
