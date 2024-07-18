import { computed, inject, Injectable, signal } from '@angular/core';
import { User, UserResponse, UsersResponse } from '../interfaces/req-response';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject( HttpClient );

  // #: es como usar private, solo que tenemos acceso apesar que es como privado
  #state = signal<State>({
    loading: true,
    users: []
  });

  // para obtener la informacion y no cambiar de manera accidental
  public users = computed( () => this.#state().users );
  public loading = computed( () => this.#state().loading );

  constructor() {
    this.http.get<UsersResponse>('https://reqres.in/api/users')
      .pipe( delay(1500) ) // hacer esperar intencionalmente
      .subscribe( res => {

        this.#state.set({
          loading: false,
          users: res.data
        })

      })
  }

  getUserById( id: string ) {
    return this.http.get<UserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe( 
        delay(1500), // hacer esperar intencionalmente
        map( (resp) => resp.data ) 
      ) 
      
  }
}
