import React from "react";
import { Card, Image } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
  id: number;
}
export const FavoritesPokemonCard = ({ id }: Props) => {
    const router = useRouter();

    const goPokemon = () => {
        router.push(`/pokemon/${ id }`);
    }

  return (
    <div className="grid xs:grid-cols-6  sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-1">
      <Card isHoverable isPressable style={{ padding: 10 }} onClick={ goPokemon }>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={"100%"}
        ></Image>
      </Card>
    </div>
  );
};

