import { useTheme } from "next-themes";
import React from "react";
import { Spacer } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
export const NavBar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "auto",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 10px",
        backgroundColor: "gray",
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/132.png"
        alt="icon app"
        width={70}
        height={70}
      />

      <Link href="/">
        <h1 color="white">P <b>okemon</b></h1>
      </Link>
      <Spacer
        style={{
          flex: 1,
        }}
      ></Spacer>
      <Link href="/favorites" className="m-10">
        <h1 color="white">Favoritos</h1>
      </Link>
    </div>
  );
};
