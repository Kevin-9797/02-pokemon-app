import { Inter } from "next/font/google";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Layout } from "../components/layouts";
import { GetStaticProps, NextPage } from "next";
import { pokeApi, pokeApiImages } from "@/api";
import { PokemonListResponse, SmallPokemon } from "../interfaces/pokemon-list";
import { PokemonCard } from "@/components/pokemon/PokemonCard";

interface Props {
  pokemons: SmallPokemon[];
}
const HomePage: NextPage<Props> = ({ pokemons }: Props) => {
  console.log(pokemons[0]);
  return (
    <>
      <Layout title="el poke">
        <div
          style={{
            margin: "15px",
            padding: "10px",
          }}
          className="gap-5 grid xs:grid-cols-6 md:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4"
        >
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </Layout>
    </>
  );
};
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=150");

  console.log(data);
  const pokemons: SmallPokemon[] = data.results.map((poke, i) => {
    return {
      ...poke,
      id: (i + 1).toString(),
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${
        i + 1
      }.png`,
    };
  }); //esto se ejecuta del lado del servidor
  return {
    props: {
      pokemons,
    },
  };
};
export default HomePage;
