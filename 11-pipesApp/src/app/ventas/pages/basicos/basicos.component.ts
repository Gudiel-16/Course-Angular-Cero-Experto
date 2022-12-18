import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'gudiel';
  nombreUpper: string = 'GUDIEL';
  nombreCompleto: string = 'gUdIeL cHrisTOPheR';

  fecha: Date = new Date(); // el día de hoy  

}
