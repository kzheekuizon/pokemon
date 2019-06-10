import { Component, OnInit, Input} from '@angular/core';
import { PokesService } from '../pokes.service';
import { PokeDetail } from '../pokemon' ;

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})

export class PokemonDetailComponent implements OnInit {
  @Input()
   name: string;

   detail: PokeDetail;

  constructor(private pokeService: PokesService) { }

  ngOnInit() {
   this.getDetail(this.name);
  }

  getDetail(name: string) {
    this.pokeService.getDetail(name).subscribe(detail => {
      this.detail = detail;
      console.log(this.detail);
    });
  }
}
