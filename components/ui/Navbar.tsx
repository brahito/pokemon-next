import { Image, Spacer, Text, useTheme } from "@nextui-org/react"
import Link from "next/link"

export const Navbar = () => {

    const { theme } = useTheme()
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0 20px',
            backgroundColor: theme?.colors.gray900.value,
        }}>
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                alt="Icono de la app"
                width={70}
                height={70}
            />

            <Link href="/">
                <div style={{ display: 'flex', alignItems: 'baseline', cursor: 'pointer' }}>
                    <Text color="white" h2>P</Text>
                    <Text h3>okémon</Text>
                </div>
            </Link>
            <Spacer css={{ flex: 1 }} />
            <Link href="/favoritos">
                <Text h3 css={{cursor:'pointer'}}>Favoritos</Text>
            </Link>

        </div>
    )
}
