import { pokeApi } from "../api";
import { Pokemon, PokemonSpecie } from "../interfaces";

export const getPokemonInfo = async (nameOrId: string) => {

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

    const { data: specie } = await pokeApi.get<PokemonSpecie>(`/pokemon-species/${nameOrId}`);

    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites,
        description: specie.flavor_text_entries.find(x => x.language.name === 'es')?.flavor_text
    }

}