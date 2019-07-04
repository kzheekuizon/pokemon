import { Component, OnInit } from '@angular/core';
import { PokesService } from '../pokes.service';

import { Pokemon, PokeResult } from '../pokemon';

import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit {

  pokemons: PokeResult[];

  constructor(
    private pokeService: PokesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() :void {
    this.route.params.subscribe(parameter => {
      // console.log(parameter.page);

      this.pokeService.getPokemons(parameter.page).subscribe((pokemons: Pokemon) => this.pokemons = pokemons.results);   
    })
    
  }

}
