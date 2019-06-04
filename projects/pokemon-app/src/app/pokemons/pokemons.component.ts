import { Component, OnInit } from '@angular/core';
import { PokesService } from '../pokes.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit {

  listResponse : any;

  constructor(private pokeService: PokesService) { }

  getPokemon(): void {
    this.pokeService.getPokemons().subscribe(pokemons => this.listResponse = pokemons.results);
  }

  ngOnInit() {
    this.getPokemon(); 
  }

}
