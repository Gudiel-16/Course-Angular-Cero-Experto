import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarcadorColor {
  color: string;
  marker?: mapboxgl.Marker;
  centro?: [number, number]
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
    .mapa-container {
      height: 100%;
      width: 100%;
    }

    .list-group {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 99;
    }

    li {
      cursor: pointer;
    }
    `
  ]
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef; // por si se quiere tener dos mapas, no se pueden tener dos id
  mapa!: mapboxgl.Map;
  zoomLevel: number = 10;
  center: [number, number] = [ -90.4852864369292, 14.631101361419223 ];

  // arreglo de marcadores
  marcadores: MarcadorColor[] = [];

  constructor() { }

  ngAfterViewInit(): void {

    // El token se configura en app.ts
    this.mapa= new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center, // [lon,lat] (donde queremos centrar)
      zoom: this.zoomLevel // zoom que queremos dar
    });

    this.leerLocalStorage(); // reconstruyendo marcadores

    // const marker = new mapboxgl.Marker()
    //       .setLngLat(this.center)
    //       .addTo(this.mapa);

    // Personalizar markador para que no salga el icono por defecto, este caso saldra un Hola Mundo
    // const marketHtml: HTMLElement = document.createElement('div');
    // marketHtml.innerHTML = 'Hola Mundo';
    // const marker = new mapboxgl.Marker({
    //   element: marketHtml
    // })
    //     .setLngLat(this.center)
    //     .addTo(this.mapa);

  }

  agregarMarcador() {

    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16)); // color aleatorio en hexadecimal

    const nuevoMarcador = new mapboxgl.Marker({
      draggable: true, // para poder mover el marcador
      color
    })
        .setLngLat( this.center )
        .addTo( this.mapa );

    this.marcadores.push({
      color,
      marker: nuevoMarcador
    });

    this.guardarMarcadoresLocalStorage();

    // cuando se deja de arrastran un marcador, se crea un evento por marcador
    nuevoMarcador.on('dragend', () => {
      this.guardarMarcadoresLocalStorage();
    });

  }

  irMarcador( marker: mapboxgl.Marker ) {
    this.mapa.flyTo({ // centrando el marcador seleccionado
      center: marker.getLngLat()
    });
  }

  guardarMarcadoresLocalStorage() {

    const lngLatArr: MarcadorColor[] = [];

    this.marcadores.forEach( m => {

      // Extrayendo color, lng, lat para guardar solamente esas propiedades
      const color = m.color;
      const { lng, lat } = m.marker!.getLngLat();

      lngLatArr.push({
        color: color,
        centro: [ lng, lat ]
      });
    })

    localStorage.setItem('marcadores', JSON.stringify(lngLatArr) );

  }

  leerLocalStorage() {
    
    if ( !localStorage.getItem('marcadores') ) {
      return;
    }

    const lngLatArr: MarcadorColor[] = JSON.parse( localStorage.getItem('marcadores')! );

    lngLatArr.forEach( m => {

      const newMarker = new mapboxgl.Marker({
        color: m.color,
        draggable: true
      })
        .setLngLat( m.centro! )
        .addTo( this.mapa );

      this.marcadores.push({
        marker: newMarker,
        color: m.color
      });

      // cuando se deja de arrastran un marcador, se crea un evento por marcador
      newMarker.on('dragend', () => {
        this.guardarMarcadoresLocalStorage();
      });

    });
    
  }

  borrarMarcador( i: number ) {
   
    this.marcadores[i].marker?.remove(); // elimina fisicamente del mapa
    this.marcadores.splice( i, 1); // eliminar del arreglo
    this.guardarMarcadoresLocalStorage(); // guardamos cambios

  }

}
