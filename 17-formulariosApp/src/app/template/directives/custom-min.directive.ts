import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
    selector: '[customMin][ngModel]', // estas son usadas en el .html, tiene que tener un 'customMin' y un 'ngModel'
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true
    }]
})
export class CustomMinDirective implements Validator {

    @Input() minimo!: number; // propiedad, que la envian desde el .html

    constructor() {}

    validate( control: FormControl ) { // control es el input
        const inputValue = control.value;
        return ( inputValue < this.minimo ) // valido si lo ingresado es < 0
                ? { 'customMin': true }
                 : null;
    }
}