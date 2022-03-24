import { FC, ReactNode } from "react"
import Head from "next/head"
import { Navbar } from '../ui/Navbar';

interface Props {
    title?: string;
}
export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title ? `${title}` : 'Pokemon App'}</title>
                <meta name="author" content="Brayan Moreno" />
                <meta name="description" content="Informacion sobre el pokémon xxx" />
                <meta name="keywords" content="xxxx, pokemon, pokedex" />
            </Head>
            <Navbar />
            <main style={{
                padding: '0 20px',
            }}>
                {children}
            </main>
        </>
    )
}
