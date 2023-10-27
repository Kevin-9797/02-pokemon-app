import { pokeApi } from "@/api";
import { GetPokeInfo, Pokemon } from "@/interfaces";


export const getPokemonInfo:any =  async( nameOrId: string ) => {

    const {data} = await  pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

    const poke: GetPokeInfo = {
        id: data.id.toString(),
        name: data.name,
        sprites: data.sprites
    }
    return {
      ...poke
    }


}