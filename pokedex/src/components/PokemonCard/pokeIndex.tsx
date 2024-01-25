import React from "react"
import { PokemonCardProps } from "./pokeTypes"
import { Container } from "./styled"

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, index }) => {
  return (
    <Container>
      <img src={pokemon.image} alt={pokemon.name} />
      <p>{pokemon.name}</p>
      <p>{index + 1}</p>
    </Container>
  )
}

export default PokemonCard
