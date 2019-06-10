import { Component, OnInit } from '@angular/core';
import { PokesService } from '../pokes.service';
import { PokemonsComponent } from '../pokemons/pokemons.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
