import Head from "next/head"
import {FC} from 'react'
import { NavBar } from '../ui/NavBar';
import { useRouter } from "next/router";


interface Props{
    children: JSX.Element;
    title?: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({children,title}:Props) => {





    return (
        <>
        
            <Head>
                <title>{ title || "Pokemon app"}</title>
                <meta name="author" content="kevin cannobbio" />
                <meta name="description" content={`info pokemon ${ title }`} />
                <meta name="keywords" content="xxx,pokemon, pokedex" />
                <meta  property="og:title" content={`Info sobre ${ title }`}/>
                <meta  property="og:description" content={`Esta es la pagina de ${ title }`}/>
                <meta  property="og:image" content={`${ origin }/images/banner.png`}/>


            </Head>
            <NavBar />

            <main style={{
                width:'100%',
                height:'100%',
                margin:'0 auto',
                padding: '0px 10px'
            }}>
                { children }
            </main>
        </>
    )


}