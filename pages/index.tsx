import { Grid } from '@nextui-org/react'
import type { NextPage, GetStaticProps } from 'next'
import { pokeApi } from '../api';
import { Layout } from '../components/layouts'
import { PokemonCard } from '../components/pokemon';
import { Pokemon, PokemonListResponse, smallPokemon } from '../interfaces';

interface Props {
  pokemons: smallPokemon[];
  state: Pokemon;
}

const Home: NextPage<Props> = ({ pokemons, state }) => {
  return (
    <Layout title='La mejor app de pokemon'>
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=251');

  const pokemons: smallPokemon[] = data.results.map((pokemon, id) => ({
    id: id + 1,
    name: pokemon.name,
    url: pokemon.url,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id + 1}.svg`,
  }));

  return {
    props: {
      pokemons,
    }
  }
}

export default Home
