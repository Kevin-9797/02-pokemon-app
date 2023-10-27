import { Layout } from "@/components/layouts";
import { FavoritesPokemons } from "@/components/pokemon";
import { NoFavorites } from "@/components/ui";
import { localFavorites } from "@/utils";
import React from "react";
import { useState, useEffect } from "react";

const Favorites = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons());

    return () => {};
  }, []);

  return (
    <Layout>
      {favoritesPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
      <FavoritesPokemons favoritesPokemons={favoritesPokemons} />        
      )}
    </Layout>
  );
};

export default Favorites;
