import React from "react";
import { FavoritesPokemonCard } from ".";

interface Props{
    favoritesPokemons: number[];
}

export const FavoritesPokemons = ({favoritesPokemons}:Props) => {
  return (
    <div
      style={{
        margin: "15px",
        padding: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
      }}
      className="grid gap-5  "
    >
      {favoritesPokemons.map((id) => (
       <FavoritesPokemonCard key={id} id={ id } />
      ))}
    </div>
  );
};
