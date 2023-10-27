import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { pokeApi } from "@/api";
import { GetPokeInfo, Pokemon, PokemonListResponse } from "@/interfaces";
import { ParsedUrlQuery } from "querystring";
import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { Layout } from "@/components/layouts";
import { localFavorites } from "@/utils";
import confetti from 'canvas-confetti';
import { useEffect,useState } from 'react';
import { getPokemonInfo } from '@/utils'



interface Props{
    pokemon: GetPokeInfo;
}

interface Params extends ParsedUrlQuery{
    name: string;
}
const PokeByNamePage:NextPage<Props> = ({pokemon}:Props) => {


    const [isInFavorites, setIsInFavorites] = useState( false )

    const onToogleFavorite = () => {
      console.log(pokemon.id);  
      localFavorites.toggleFavorite(parseInt(pokemon.id));
      setIsInFavorites(!isInFavorites)
  
      if(isInFavorites) return;
  
      confetti({
        zIndex: 999889,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0
        }
      })
    }
  
    // console.log({existWindow: typeof window}) esto sirve para saber diferenciar el resultado del backend y el frontend
  
    useEffect(() => {
      setIsInFavorites(localFavorites.existInFavorites(parseInt(pokemon.id))); // para solucionar el error del localstorage utilizamos un useEffect ya que al ejecutar 
      //codigo en una pagina generada por backend no localiza el localstorage por lo tanto esperamos a que se genere el codigo del lado del cliente y seteamos el valor del useState
    }, [pokemon.id]) 
    return (
        <Layout title={pokemon.name}>
        <div
        
        className="gap-2">
          <div
            style={{
              margin: "15px",
              padding: "10px",
            }}
            className="grid xs:grid-cols-12  sm:grid-cols-4 md:grid-cols-3 "
          >
            <Card  isHoverable>
              <CardBody className="flex flex-row justify-center w-full overflow-visible p-5 ">
                <Image
                  width="100%"
                  height={200}
                  shadow="sm"
                  radius="lg"
                  className="w-full cover-object h-[140px]"
                  src={
                    pokemon.sprites.front_shiny ||
                    "/no-image.png"
                  }
                />
              </CardBody>
            </Card>
          </div>
  
          <div
            style={{
              margin: "15px",
              padding: "10px",
            }}
            className="grid xs:grid-cols-12 sm:grid-cols-2 "
          >
            <Card shadow="sm" isHoverable>
              <CardHeader
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  textTransform: "capitalize",
                }}
              >
                <h1>{pokemon.name}</h1>
  
                <Button
                 onClick={ () => onToogleFavorite()}
  
                 >{ isInFavorites ? 'In Favorites' : 'Add favorites'}</Button>
              </CardHeader>
  
              <CardBody>
                <h3>Sprites:</h3>
                <div className="flex flex-row justify-center align-center">
                  <Image
                    src={pokemon.sprites.back_default}
                    width={100}
                    height={100}
                    alt={pokemon.name}
                  />
                  <Image
                    src={pokemon.sprites.front_default}
                    width={100}
                    height={100}
                    alt={pokemon.name}
                  />
                  <Image
                    src={pokemon.sprites.front_shiny}
                    width={100}
                    height={100}
                    alt={pokemon.name}
                  />
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </Layout>
    )
}


export const getStaticPaths: GetStaticPaths<Params> = async(ctx) => {
    
    const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=150");

    const paths = data.results.map(({name}) => ({
        params: { name },
      }));
    
      return {
        paths,
        fallback: false,
      };

    
} 
export const getStaticProps: GetStaticProps = async({
 params,
 }) => {

  const {name} = params!;

    return {
        props:{
            pokemon: await getPokemonInfo(name)
        }
    };
    
} 
export default PokeByNamePage
