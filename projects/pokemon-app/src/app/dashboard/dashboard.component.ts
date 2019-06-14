import { Component, OnInit } from '@angular/core';
import { PokesService } from '../pokes.service';
import { PokemonsComponent } from '../pokemons/pokemons.component';
import { PokeDetail } from '../pokemon';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name: string;
  detail: PokeDetail;

 constructor(
   private pokeService: PokesService,
   private route: ActivatedRoute )  { }

 ngOnInit() {
  // this.getDetail(this.name);
  this.getDetail();
 }

//  getDetail(name: string) {

  getDetail() {
  const name = this.route.snapshot.paramMap.get('name');
   this.pokeService.getDetail(name).subscribe(detail => {
     this.detail = detail;
     console.log(this.detail);
   });
 }
}
