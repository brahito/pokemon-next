import React from 'react'
import { useState, useEffect } from 'react';
import { Layout } from '../../components/layouts'
import { Favorites, NoFavorites } from '../../components/ui'
import { localFavorite } from '../../utils';

const FavoritePage = () => {

    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritePokemons(localFavorite.pokemons().sort((a, b) => a - b));
    }, [])

    return (
        <Layout title='Pokemons favoritos'>
            {
                favoritePokemons.length === 0 ? (
                    <NoFavorites />
                ) : (
                    <Favorites pokemons={favoritePokemons} />
                )
            }
        </Layout>
    )
}

export default FavoritePage
