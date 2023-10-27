import axios from "axios";

const pokeApiImages = axios.create({
    baseURL:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/'
})

export default pokeApiImages;