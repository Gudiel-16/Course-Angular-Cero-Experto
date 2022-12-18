import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Map, Popup, Marker } from 'mapbox-gl';
import { MapService } from '../../services/map.service';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv') mapDivElement!: ElementRef

  constructor( private placesService: PlacesService,
               private mapService: MapService ) { }
  
  ngAfterViewInit(): void {

    if ( !this.placesService.useLocation ) throw Error('No hay placesService.userLocation');

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/light-v10', // style URL (temas)
      center: this.placesService.useLocation,
      zoom: 14,
    });

    // Cuando se le de click en el marcador saldra este mensaje
    const popup = new Popup()
      .setHTML(`
        <h6>Aquí estoy</h6>
        <span>Estoy en este lugar del mundo</span>
      `);

    // Creando marcador
    new Marker({ color: 'red' })
      .setLngLat( this.placesService.useLocation )
      .setPopup( popup ) // enlazamos al popup
      .addTo( map )

      this.mapService.setMap( map ); // inicializamos mapa y lo guardamos en el servicio
    
  }

}
