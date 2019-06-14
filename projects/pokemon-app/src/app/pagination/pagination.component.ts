import { Component, OnInit } from '@angular/core';
import { PokesService } from '../pokes.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  page: number;
  pages: number[]= new Array();

  constructor(
    private pokeService: PokesService
  ) { }
  
  ngOnInit() {
    this.getDetail();
  }

  getDetail() {
    console.log('pokemons');
    this.pokeService.getPokemons().subscribe((pokemons: Pokemon) => {
      let cnt:number =  pokemons.count;
      this.page = Math.ceil(cnt / 48);

      for (var _i = 0; _i < this.page ; _i++) {
          this.pages.push(_i + 1);
        }
      console.log(this.pages);
    });   
  }
}
