import { Injectable } from '@angular/core';
import { AnySourceData, LngLatBounds, LngLatLike, Map, Marker, Popup } from 'mapbox-gl';
import { DirectionsApiClient } from '../api/directionsApiClient';
import { Feature } from '../interfaces/places';
import { DirectionsResponse, Route } from '../interfaces/directions';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map?: Map;
  private markers: Marker[] = [];

  get isMapReady(){
    return !!this.map;
  }

  constructor( private directionsApi: DirectionsApiClient ) {}

  setMap( map: Map ) {
    this.map = map;
  }

  // navegar a una ubicacion
  flyTo( coords: LngLatLike ) {
    if ( !this.isMapReady ) throw Error('El mapa no esta inicializado');

    this.map?.flyTo({
      zoom: 14,
      center: coords
    });
  }

  // Crea marcadores cuando se busquen lugares
  createMarkersFromPlaces( places: Feature[], userLocation: [number, number] ) {

    if ( !this.map ) throw Error('Mapa no inicializado');
    
    this.markers.forEach( marker => marker.remove() ); // recorrer cada marcador y eliminarrlos fisicamente del mapa
    const newMarkers = [];

    for (const place of places) { // creando marcadores
      const [ lng, lat ] = place.center;
      const popup = new Popup()
        .setHTML(`
          <h6>${ place.text }</h6>
          <span>${ place.place_name }</span>
        `);

      const newMarker = new Marker()
        .setLngLat([lng, lat])
        .setPopup( popup )
        .addTo( this.map );
      
      newMarkers.push( newMarker ); // guardamos cada marcador en nuevo array
    }

    this.markers = newMarkers; // guardamos en el array global

    if( places.length === 0 ) return; // validar que alla al menos un marcador

    // Limites del mapa (Muestra todos los marcadores de los lugares encontrados)
    const bounds = new LngLatBounds();
    newMarkers.forEach( marker => bounds.extend( marker.getLngLat() ) ); // crea pares: [1,2],[3,4],[5,6]
    bounds.extend( userLocation ); // agramos nuestra ubicacion

    this.map.fitBounds(bounds, { // pading para que no muestre marcadores al ras
      padding: 200
    })

  }

  // Rutas entre dos puntos, este caso mi ubicacion y la ubiacion que seleccione el usuario cuando busca
  getRouteBetweenPoints( start: [number, number], end: [number, number] ) {

    this.directionsApi.get<DirectionsResponse>(`/${ start.join(',') };${ end.join(',') }`)
      .subscribe( resp => this.drawPolyline( resp.routes[0] ) );
  }

  // Dibujando ruta o linea entre dos puntos o ubicaciones
  private drawPolyline( route: Route ) {

    console.log({ kms: route.distance / 1000, duration: route.duration / 60 });

    if ( !this.map ) throw Error('Mapa no inicializado');

    const coords = route.geometry.coordinates; // todas las coordenadas

    const bounds = new LngLatBounds();

    coords.forEach( ([ lng, lat ]) => {
      bounds.extend([ lng, lat ]);
    });

    this.map?.fitBounds( bounds, {
      padding: 200
    });

    // Polyline
    const sourceData: AnySourceData = { // estructura en doc de mapbox
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: coords // puntos a dibujar
            }
          }
        ]
      }
    }

    if ( this.map.getLayer('RouteString') ) { // si hay linea, las borramos, ya que no acepta id repetidos
      this.map.removeLayer('RouteString');
      this.map.removeSource('RouteString');
    }

    this.map.addSource('RouteString', sourceData );

    this.map.addLayer({
      id: 'RouteString',
      type: 'line',
      source: 'RouteString', // mismo nombre del addSouerce
      layout: {
        'line-cap': 'round',
        'line-join':'round'
      },
      paint: {
        'line-color': 'black',
        'line-width': 3
      }
    });

  }

}
