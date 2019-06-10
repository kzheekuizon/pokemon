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
    moves: PokeMoves[];
    name: string;
    order: number;
    species: PokeSpecies[];
    sprites: PokeSprite;
    stats: PokeStats[];
    types: PokeTypes[]; 
    weight: number;
}

export interface PokeAbility {
    ability: string;
    is_hidden: boolean;
    slot: number;
}

export interface PokeForm { 
    name: string;
    url: string;
}

export interface PokeGame {
    game_index: number;
    version: PokeVersion;
}

export interface PokeMoves {
    move: PokeMove;
    version_group_details: PokeGrpDtl[];
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

export interface PokeStats {
    base_stat: number;
    effort: number;
    stat: PokeStat;
}

export interface PokeTypes {
    slot: number;
    type: PokeType;
}

export interface PokeVersion {
    name: string;
    url: string;
}

export interface PokeMove {
    name: string;
    url: string;
}

export interface PokeGrpDtl {
    level_learned_at: number;
    move_learn_method: PokeLearnMethod;
    version_group: PokeVersionGrp;
}

export interface PokeLearnMethod {
    name: string;
    url: string;
}

export interface PokeVersionGrp {
    name: string;
    url: string;
}

export interface PokeStat {
    name: string;
    url: string;
}

export interface PokeType {
    name: string;
    url: string;
}