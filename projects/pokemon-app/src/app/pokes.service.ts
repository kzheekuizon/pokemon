import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PokesService {

  constructor(
    private http: HttpClient
  ) { }

  /** GET Pokemons from the server */
  getPokemons (): Observable<any> {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon');
  }
}
