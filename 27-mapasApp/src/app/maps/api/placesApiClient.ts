import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PlacesApiClient extends HttpClient {

    public baseUrl: string = 'https://api.mapbox.com/geocoding/v5/mapbox.places';

    constructor( handler: HttpHandler ){
        super(handler); // permite usar las peticiones http (post, put, etc)
    }

    // sobreescribir el tipo get (http tipo get)
    public override get<T>( url: string, options: {
        params?: HttpParams | {
            [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; // tipos de datos (firma definida por angular)
        };
    }) {

        url = this.baseUrl + url;

        return super.get<T>( url, { // super.get: estamos llamando el http.get
            params: { // parametros mandados a mapbox
                limit: 5,
                language: 'es',
                access_token: environment.apiKey,
                ...options.params
            }
        });
    }
}


