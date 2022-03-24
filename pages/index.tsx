import { Button } from '@nextui-org/react'
import type { NextPage, GetStaticProps } from 'next'
import { pokeApi } from '../api';
import { Layout } from '../components/layouts'
import { PokemonListResponse } from '../interfaces';

const Home: NextPage = (props) => {
  return (
      <Layout title='La mejor app de pokemon'>
        <p>Soy un tema negro</p>
        <ul>
          <li>Pokemon</li>
          <li>Pokemon</li>
          <li>Pokemon</li>
          <li>Pokemon</li>
          <li>Pokemon</li>
          <li>Pokemon</li>
          <li>Pokemon</li>
        </ul>
      </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  console.log(data);
  return {
    props: {
      pokemons: data.results
    }
  }
}

export default Home
