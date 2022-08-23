import { Grid } from '@nextui-org/react'
import React from 'react'
import { FavoriteCard } from '../pokemon'
import { FC } from 'react';
interface Props {
    pokemons: number[];
}
export const Favorites: FC<Props> = ({ pokemons }) => {
    return (
        <Grid.Container gap={2} direction='row' justify='flex-start'>
            {
                pokemons.map(pokemon => (
                    <FavoriteCard id={pokemon} />
                ))
            }
        </Grid.Container>
    )
}
