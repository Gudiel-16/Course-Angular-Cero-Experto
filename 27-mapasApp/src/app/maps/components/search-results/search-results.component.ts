import { Component } from '@angular/core';

import { MapService } from '../../services/map.service';
import { PlacesService } from '../../services/places.service';

import { Feature } from '../../interfaces/places';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {

  public selectedId: string = ''; // para saber que lugar esta seleccionado

  constructor( 
    private placesService: PlacesService,
    private mapService: MapService,
  ) { }

  // Mientras esta cargando
  get isLoadingPlaces(): boolean {
    return this.placesService.isLoadingPlaces;
  }

  // Lugares
  get places(): Feature[] {
    return this.placesService.places;
  }

  // Ir a ese lugar
  flyTo( place: Feature ) {
    this.selectedId = place.id;

    const [ lng, lat ] = place.center;
    this.mapService.flyTo([ lng, lat ]);
  }

  // Obtener distancias y duracion de recorrido
  getDirections( place: Feature ) {
    if ( !this.placesService.useLocation ) throw Error('No hay userLocation');

    this.placesService.deletePlaces();

    const start = this.placesService.useLocation;
    const end = place.center as [number, number];

    this.mapService.getRouteBetweenPoints(start, end);
  }

}
