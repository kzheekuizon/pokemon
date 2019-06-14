import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PokeDetail } from './pokemon';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'pokemons', component: PokemonsComponent },
  { path: 'pokemon/page/:page', component: PokemonsComponent },
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
  { path: 'dashboard/:name', component: DashboardComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
