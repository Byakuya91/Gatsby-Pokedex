import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import PokemonCard from "../../components/PokemonCard/pokeIndex"
import { BackButton, TextContainer } from "../../styles/individualPokemonStyles"

// ?GraphQL stats query
export const query = graphql`
  query PokemonList($name: String!) {
    allPokemon(filter: { name: { eq: $name } }) {
      nodes {
        name
        stats {
          attack
          defense
          special_attack
          hp
          special_defense
          speed
        }
        types
        image
        id
      }
    }
  }
`

//? Page displaying information
const IndividualPokemon: React.FC = ({ data }) => {
  // Test console log for data
  // console.log(data, "individual pokemon data")

  // Getting access to the data
  const pokemon = data?.allPokemon?.nodes[0]

  return (
    <Layout>
      <BackButton to="/">&#8592;</BackButton>
      <PokemonCard pokemon={pokemon} />
      <TextContainer>
        <p>
          <strong>Pokemon Types:</strong> {pokemon.types.join(", ")}
        </p>
        <p>
          <strong>Attack:</strong> {pokemon.stats.attack}
        </p>
        <p>
          <strong>Defense:</strong> {pokemon.stats.defense}
        </p>
        <p>
          <strong>Special Attack:</strong> {pokemon.stats.special_attack}
        </p>
        <p>
          <strong>HP:</strong> {pokemon.stats.hp}
        </p>
        <p>
          <strong>Special Defense:</strong> {pokemon.stats.special_defense}
        </p>
        <p>
          <strong>Speed:</strong> {pokemon.stats.speed}
        </p>
      </TextContainer>
    </Layout>
  )
}

export default IndividualPokemon
