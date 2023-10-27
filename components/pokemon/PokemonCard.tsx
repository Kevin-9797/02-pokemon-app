import { SmallPokemon } from '@/interfaces'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

interface Props{
    pokemon:SmallPokemon
}


export const PokemonCard:FC<Props> = ({pokemon:{id,name,img}}) => {

    const router = useRouter();

    const onClick = () => {
        
        router.push(`/pokemon/${id}`);
        
    }


  return (
    <Card
    shadow="sm"
    isPressable
    isHoverable
    onClick={onClick}
  >
    <CardBody  className="flex flex-row justify-center w-full overflow-visible p-5 ">
      <Image
        shadow="sm"
        radius="lg"
        alt={name}
        className="w-full cover-object h-[140px]"
        src={img!}
      />
    </CardBody>
    <CardFooter className="text-small justify-between">
      <b style={{
        textTransform:'capitalize'
      }}>{name}</b>
      <p  className="text-default-500">{id}</p>
    </CardFooter>
  </Card>


  )
}
