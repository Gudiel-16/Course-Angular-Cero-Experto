import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {

  public menuItems = routes
                      .map( (route) => route.children ?? [])
                      .flat() // se encarga de aplanar los array, para no tener un arreglo dentro de otro
                      .filter( (route) => route && route.path) // para excluir la ruta ''
                      .filter( (route) => !route.path?.includes(':')); // excluyo la ruta de user/:id

  constructor(){
    

  }

}
