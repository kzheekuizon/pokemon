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
  // private pokeOffSet = '?offset=0';
  private pokeLimit = '&limit=48';


  constructor(
    private http: HttpClient) {}
    // private messageService: MessageService) { }

    // private log(message: string) {
    //   this.messageService.add(`PokeService: ${message}`);
    // }


  getPokemons(num?:number): Observable<Pokemon> {
    console.log('ano');
    console.log(num);
    if(num) {
      let Offset = (num-1)*48;
      const url= `${this.pokeUrl}/?offset=${Offset}${this.pokeLimit}`;
      console.log(num);
      return this.http.get<Pokemon>(url);
    }
    else {
      const url=`${this.pokeUrl}?offset=0&limit=48`;
      return this.http.get<Pokemon>(url);
    }
  }

  getDetail(name: string) {
    const url = `${this.pokeUrl}/${name}`;
    // console.log(url);
    return this.http.get<PokeDetail>(url);
  }
}