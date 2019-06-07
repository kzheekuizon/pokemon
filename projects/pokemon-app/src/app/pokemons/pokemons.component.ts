import { Component, OnInit } from '@angular/core';
import { PokesService } from '../pokes.service';

import { Pokemon, PokeResult } from '../pokemon';
//import { POKEMONS } from '../mock.pokemon';

import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit {

  pokemons: PokeResult[];

  constructor(private pokeService: PokesService) { }

  ngOnInit() {
    this.getPokemons();
    
  }

  getPokemons() {
    return this.pokeService.getPokemons().subscribe((pokemons: Pokemon) => this.pokemons = pokemons.results);   
  }

}
