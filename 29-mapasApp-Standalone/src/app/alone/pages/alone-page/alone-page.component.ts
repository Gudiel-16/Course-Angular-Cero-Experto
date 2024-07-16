import { Component } from '@angular/core';
import { CounterAloneComponent } from '../../components/counter-alone/counter-alone.component';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
// import { CommonModule } from '@angular/common';

@Component({ // se quito el selector porque sera pagina, asi que se puede obviar
  standalone: true, // esto lo hace componente independiente
  imports: [ CounterAloneComponent, SideMenuComponent ], // componentes a utilizar en este
  templateUrl: './alone-page.component.html',
  styleUrls: ['./alone-page.component.css']
})
export class AlonePageComponent {

  constructor() {}

}
