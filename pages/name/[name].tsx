import { useState, useEffect } from 'react';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';

import confetti from 'canvas-confetti';

import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts';
import { Pokemon, PokemonListResponse, PokemonName, PokemonSpecie, smallPokemon } from '../../interfaces';
import { getPokemonInfo, localFavorite } from '../../utils';

interface Props {
    pokemon: Pokemon;
}
const PokemonPageByName: NextPage<Props> = ({ pokemon }) => {

    const onToggleFavorite = () => {
        localFavorite.toggleFavorite(pokemon.id);
        setisInFavorites(localFavorite.existInFavorites(pokemon.id));

        if (!isInFavorites) {
            confetti({
                zIndex: 999,
                particleCount: 100,
                spread: 100,
                angle: -100,
                origin: { x: 1, y: 0 },
            })
        }
    };

    const [isInFavorites, setisInFavorites] = useState(localFavorite.existInFavorites(pokemon.id));
    return (
        <Layout title={pokemon.name}>
            <Grid.Container css={{ marginTop: '5px' }} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card hoverable css={{ padding: '30px' }}>
                        <Card.Body>
                            <Card.Image src={pokemon.sprites.other?.dream_world.front_default || 'no-image.png'} alt={pokemon.name} width='100%' height='200px' />
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0' }}>
                            <Text h1 transform='capitalize'>{pokemon.name}</Text>
                            <Button
                                color='gradient'
                                ghost={!isInFavorites}
                                onClick={onToggleFavorite}
                            >
                                {isInFavorites ? 'En favoritos' : 'Guardar en favoritos'}
                            </Button>
                        </Card.Header>
                        <Card.Body css={{ paddingTop: '0' }}>
                            <Text size={16}>
                                {pokemon.description}
                            </Text>
                            <Text size={30}>
                                Sprites:
                            </Text>
                            <Container direction='row' display='flex' gap={0}>
                                <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100} />
                                <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100} />
                                <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100} />
                                <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100} />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=251');

    const pokemonNames: string[] = data.results.map((pokemon) => pokemon.name);

    return {
        paths: pokemonNames.map(name => ({
            params: { name }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    
    const { name } = params as { name: string };

    return {
        props: {
            pokemon: await getPokemonInfo(name)
        }
    }
}

export default PokemonPageByName;
