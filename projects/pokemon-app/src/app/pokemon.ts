import { ɵangular_packages_platform_browser_platform_browser_k } from '@angular/platform-browser';

export interface PokeResult {
    name: string;
    url: string;
  }

export interface Pokemon {
    count: number;
    next: string;
    previous: string;
    results: PokeResult[];
}

export interface PokeDetail {
    abilities: PokeAbility[];
    base_experience: number;
    forms: PokeForm[];
    game_indices: PokeGame[];
    height: number;
    held_items: string;
    id: number;
    is_default: boolean;
    location_area_encounter: string;
    moves: PokeMove[];
    name: string;
    order: number;
    species: PokeSpecies[];
    sprites: PokeSprite;
    stats: PokeStat[];
    types: PokeType[]; 
    weight: number;
}

export interface PokeAbility {

}

export interface PokeForm { 

}

export interface PokeGame {
    
}

export interface PokeMove {

}

export interface PokeSpecies {
    name: string;
    url: string;
}

export interface PokeSprite {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

export interface PokeStat {

}

export interface PokeType {

}