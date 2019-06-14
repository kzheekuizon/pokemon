import { Component, OnInit } from '@angular/core';
import { PokesService } from '../pokes.service';
import { PokemonsComponent } from '../pokemons/pokemons.component';
import { PokeDetail } from '../pokemon';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
