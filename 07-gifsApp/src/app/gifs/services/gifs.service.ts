import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'a4PVUaiGuxzV1LzrLO3OrGLCVwbgXoB1';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial : string[] = [];
  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient){
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  buscarGifs( query: string = '' ) {
    
    query = query.trim().toLocaleLowerCase(); // minusculas

    if(!this._historial.includes(query)){ // no allan duplicados
      this._historial.unshift(query);
      this._historial = this.historial.splice(0,10); // mostrar solo 10 valores

      localStorage.setItem('historial', JSON.stringify(this._historial));

    }

    const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('limit', '10')
          .set('q', query );

    this.http.get<SearchGifsResponse>(`${ this.servicioUrl }/search`, { params } )
        .subscribe( (resp) => {
          this.resultados = resp.data;
          localStorage.setItem('resultados', JSON.stringify(this.resultados));
        });
        
    // Ejemplo de peticiones con fetch:

    // fetch(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=dragonballz`)
    // .then(resp => {
    //   resp.json().then(data => {
    //     console.log(data);
    //   })
    // });

    // const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=dragonballz`);
    // const data = await resp.json();
    // console.log(data);

  }

}
