import { Image } from "@nextui-org/react";
import React from "react";

export const NoFavorites = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 100px)",
        alignItems: " center",
        alignContent: "center",
        alignSelf: "center",
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
        width={250}
        height={250}
        style={{
          opacity: 0.1,
        }}
      ></Image>
    </div>
  );
};
