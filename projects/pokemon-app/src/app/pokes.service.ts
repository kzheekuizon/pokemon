import { Injectable } from '@angular/core';
import { Pokemon, PokeResult } from './pokemon';
import { PokeDetail } from './pokemon';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class PokesService {

  private pokeUrl = 'https://pokeapi.co/api/v2/pokemon';
  private pokeOffSet = '?offset=0';
  private pokeLimit = '&limit=50';


  constructor(
    private http: HttpClient) {}
    // private messageService: MessageService) { }

    // private log(message: string) {
    //   this.messageService.add(`PokeService: ${message}`);
    // }


  getPokemons() {
    return this.http.get<Pokemon>(this.pokeUrl+this.pokeOffSet+this.pokeLimit);
  }

  getDetail(name: string) {
    const url = `${this.pokeUrl}/${name}`;
    console.log(url);
    return this.http.get<PokeDetail>(url);
  }
}