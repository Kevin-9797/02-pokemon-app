
export interface PokemonListResponse {
    count:    number;
    next:     string;
    previous?: string;
    results:  SmallPokemon[];
}

export interface SmallPokemon {
    name: string;
    url:  string;
    id? :string;
    img? :string;
}


export interface GetPokeInfo{
    id: string;
    name: string;
    sprites: Sprites 

}

export interface Sprites {
    back_default:       string;
    back_female:        null;
    back_shiny:         string;
    back_shiny_female:  null;
    front_default:      string;
    front_female:       null;
    front_shiny:        string;
    front_shiny_female: null;
    animated?:          Sprites;
}