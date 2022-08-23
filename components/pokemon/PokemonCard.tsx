import React, { FC } from 'react'
import { smallPokemon } from '../../interfaces';
import { Card, Container, Grid, Row, Text } from '@nextui-org/react'
import { useRouter } from 'next/router';

interface Props {
    pokemon: smallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
    const router = useRouter();
    const onClick = () => {
        router.push(`/name/${pokemon.name}`);
    }
    return (
        <Grid xs={6} sm={3} md={2}>
            <Card hoverable clickable onClick={onClick}>
                <Card.Body css={{ p: 1 }}>
                    <Card.Image src={pokemon.img} width="100%" height={140} />
                </Card.Body>
                <Card.Footer>
                    <Row css={{ flexDirection: 'column-reverse' }} align="center">
                        <Text transform='capitalize'>{pokemon.name} </Text>
                        <Text>#{pokemon.id}</Text>
                        <Container>
                        </Container>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}
