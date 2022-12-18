import { Injectable } from '@angular/core';
import { PlacesApiClient } from '../api/placesApiClient';
import { MapService } from './map.service';
import { Feature, PlacesResponse } from '../interfaces/places';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation?: [number, number];

  public isLoadingPlaces: boolean = false;
  public places: Feature[] = [];

  get isUserLocationReady(): boolean {
    return !!this.useLocation; // una negacion para que diga que existe y otra para que sea true
  }

  constructor( private placesApi: PlacesApiClient,
               private mapService: MapService ) { 
    this.getUserLocation();
  }

  // Obtener localizacion del usuario
  // Ver la localizacion en la extension de Angular DevTool
  // Si queremos poner localizacion por defecto en el navegador: tres puntos -> More tools -> Sensors -> Other e ingresar datos
  public async getUserLocation(): Promise<[number, number]> {

    return new Promise( (resolve, reject ) => {

      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.useLocation = [ coords.longitude, coords.latitude ];
          resolve( this.useLocation );
        },
        ( err ) => {
          alert('No se pudo obtener la geolocalización')
          console.log(err);
          reject();
        }
      );

    });

  }

  // Para buscar lugares
  getPlacesByQuery( query: string = '' ) {

    if ( query.length === 0 ) { // valido si viene una cadena vacia
      this.isLoadingPlaces = false;
      this.places = [];
      return;
    }

    if ( !this.useLocation ) throw Error('No hay userLocation');

    this.isLoadingPlaces = true;

    this.placesApi.get<PlacesResponse>(`/${ query }.json`, {
      params: {
        proximity: this.useLocation.join(',')
      }
    })
      .subscribe( resp => {
        this.isLoadingPlaces = false;
        this.places = resp.features;

        this.mapService.createMarkersFromPlaces( this.places, this.useLocation! );
      });
  }

  // eliminando lugares, para ocultar el menu cuando se vean direcciones
  deletePlaces() {
    this.places = [];
  }

}
