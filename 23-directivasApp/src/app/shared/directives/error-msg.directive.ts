import { Directive, ElementRef, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]' // nombre con la que la vamos a usar, en el .html solo poner error-msg
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red'; // Color por defecto sera rojo
  private _mensaje: string = 'Este campo es requerido';

  htmlElement: ElementRef<HTMLElement>;

  // Recibiendo el color
  // Input tipo set, hace lo mismo que se hacia en el ngOnChanges
  // Son ejecutados solo si cambia el color, lo mismo para 'mensaje' y 'valido'
  @Input() set color( valor: string) {
    this._color = valor;
    this.setColor();
  }

  // Recibiendo el mensaje
  @Input() set mensaje( valor: string ) {
    this._mensaje = valor;
    this.setMensaje();
  }

  // Recibiendo valor para validar
  @Input() set valido( valor: boolean ) {
    if( valor ) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  constructor( private el: ElementRef<HTMLElement> ) { 
    this.htmlElement = el;
  }

  ngOnChanges(changes: SimpleChanges): void {
    
    // Puede ser ineficiente si se tienen muchos campos o propiedades a modificar

    // if ( changes.mensaje ) {
    //   const mensaje = changes.mensaje.currentValue; // valor actual
    //   this.htmlElement.nativeElement.innerText = mensaje;
    // }

    // if ( changes.color ) {
    //   const color = changes.color.currentValue;
    //   this.htmlElement.nativeElement.style.color = color;
    // }

    // console.log(changes)
  }

  ngOnInit(): void {
    // console.log(this.color); // undefined
    // console.log(this.mensaje); // undefined
    this.setEstilo();
    this.setColor();
    this.setMensaje();
  }

  // Asignando estilo
  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  // Asignando color
  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  // Asignando mensaje
  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

}
