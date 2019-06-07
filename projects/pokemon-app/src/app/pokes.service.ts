import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { PokeDetail } from './pokemon';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PokesService {

  private pokeUrl = 'https://pokeapi.co/api/v2/pokemon';
  private pokeOffSet = '?offset=0';
  private pokeLimit = '&limit=48';


  constructor(private http: HttpClient) { }


  getPokemons() {
    return this.http.get<Pokemon>(this.pokeUrl+this.pokeOffSet+this.pokeLimit);
  }

  getImage(name: string) {
    const url = `${this.pokeUrl}/${name}`;
    console.log(url);
    return this.http.get<PokeDetail>(url);
  }

  getId(id: number) {

  }
}