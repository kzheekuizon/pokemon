import { Component, OnInit, Input} from '@angular/core';
import { PokesService } from '../pokes.service';
import { PokeDetail } from '../pokemon' ;

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})

export class PokemonDetailComponent implements OnInit {
  @Input() name: string;

  image: string;
  p: number = 1;

  constructor(private pokeService: PokesService) { }

  ngOnInit() {
   this.getImage(this.name);
  }

  getImage(name: string) {
    this.pokeService.getImage(name).subscribe(detail => {
      this.image = detail.sprites.front_default;
      console.log(this.image);
    });
    
  }

}
