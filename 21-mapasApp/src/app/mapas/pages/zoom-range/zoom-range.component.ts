import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
    .mapa-container {
      height: 100%;
      width: 100%;
    }

    .row {
      background-color: white;
      border-radius: 5px;
      bottom: 50px;
      left: 50px;
      padding: 10px;
      position: fixed;
      z-index: 999;
      width: 400px
    }
    `
  ]
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {

  @ViewChild('mapa') divMapa!: ElementRef; // por si se quiere tener dos mapas, no se pueden tener dos id
  mapa!: mapboxgl.Map;
  zoomLevel: number = 10;
  center: [number, number] = [ -90.4852864369292, 14.631101361419223 ];

  constructor() { }

  // Limpiamos listener
  ngOnDestroy(): void {
      this.mapa.off('zoom', () => {});
      this.mapa.off('zoomend', () => {});
      this.mapa.off('move', () => {});
  }

  // con el contrusctor o ngOnInit el 'divMapa' es undefined aun, por eso se usa este
  ngAfterViewInit(): void {

    // El token se configura en app.ts
    this.mapa= new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center, // [lon,lat] (donde queremos centrar)
      zoom: this.zoomLevel // zoom que queremos dar
    });

    // listener para cuando cambie zoom
    this.mapa.on('zoom', (ev) => {
      const zoom = this.mapa.getZoom();
      this.zoomLevel = zoom;
    });

    // listener para cuando cambie zoom, pero cuando termine de moverse
    this.mapa.on('zoomend', (ev) => {
      if (this.mapa.getZoom() > 18 ){
        this.mapa.zoomTo(18); // reset zoom a 18
      }
    });

    // movimiento de mapa
    this.mapa.on('move', (event) => {
      const target = event.target;
      const { lng, lat } = target.getCenter();
      this.center = [lng, lat];
    });
  }

  zoomOut() {
    this.mapa.zoomOut();
  }

  zoomIn() {
    this.mapa.zoomIn();
  }

  zoomCambio(valor: string){
    this.mapa.zoomTo(Number(valor));
  }

}
