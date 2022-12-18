import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined; // si es undefned no esta autenticada, al menos en este caso se hizo asi

  get auth(): Auth {
    return { ...this._auth! } // se destructura para no hacer referencia a este _auth original
  }

  constructor( private http: HttpClient ) { }

  verificaAutenticacion(): Observable<boolean> {

    if ( !localStorage.getItem('token') ) { // si no existe el token
      return of(false); // of: crea un Observable de false
    }

    return this.http.get<Auth>(`${ this.baseUrl }/usuarios/1`)
              .pipe(
                map( auth => { // map: transforma y retorna un nuevo valor
                  this._auth = auth; // recargamos la informacion del usuario
                  return true;
                })
              );
  }

  login() {
    return this.http.get<Auth>(`${ this.baseUrl }/usuarios/1`)
              .pipe(
                // pasa por aqui antes del subscrive
                tap( auth => this._auth=auth), 
                tap( auth => localStorage.setItem('token', auth.id ) ),
              );
  }

  logout(){
    this._auth = undefined; 
  }

}
