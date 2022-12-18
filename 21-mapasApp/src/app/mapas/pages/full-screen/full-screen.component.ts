import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [
    `
    #mapa {
      height: 100%;
      width: 100%;
    }
    `
  ]
})
export class FullScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    // El token se configura en app.ts
    var map = new mapboxgl.Map({
      container: 'mapa', // id del container en .html (configurar width y heigh del div, html y body)
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ -90.4852864369292, 14.631101361419223 ], // [lon,lat] (donde queremos centrar)
      zoom: 16 // zoom que queremos dar
    });

  }

}
