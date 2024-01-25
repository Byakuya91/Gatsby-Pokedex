import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { HomeTitle, PokemonGrid } from "../styles/homepagestyles"
import { graphql } from "gatsby"
import { AllPokemonType } from "../types/pokemon"
import PokemonCard from "../components/PokemonCard/pokeIndex"
import SearchBar from "../components/SearchBar/pokeSearch"
import Dropdown from "../components/Dropdown/DropIndex"

// TODOs0: Connect to Nintendo API(DONE)
// TODO1: Render out the Pokedex cards(DONE)
// TODO2: Style the cards and work on the layouts(DONE)
// TODO3: Dropdown menu based on type (ONGOING)
// TODO4: filter and search functionality(ONGOING)
// TODO5: Card click with stats of Pokemon(ONGOING)

// ?Querrying GraphQL the Pokemon API via gatsby-source-pokeapi
export const pageQuery = graphql`
  query AllPokemonQuery {
    allPokemon {
      nodes {
        types
        image
        id
        name
      }
      totalCount
    }
  }
`
// ?type of data
type IndexPageProps = {
  data: AllPokemonType
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  //? Checking if the data is coming through on homepage
  // console.log(data, "homepagedata")

  // ?Key variables for accessing Data
  const numOfPokemon = data?.allPokemon?.totalCount
  const allPokemon = data?.allPokemon?.nodes

  // ? Search Bar component state and prop variables
  const [search, setSearch] = React.useState("")
  // ? Dropdown search props and state
  const [type, setType] = React.useState("")

  // testing the type
  console.log(type, search)

  return (
    <Layout>
      <HomeTitle>Home page</HomeTitle>
      <p>Number of Pokemon:{numOfPokemon ?? "N/A"}</p>
      <SearchBar search={search} setSearch={setSearch} />
      <Dropdown setType={setType} />
      {/* Rendering the Pokemon */}
      <div>
        <PokemonGrid>
          {allPokemon?.map((pokemon, index) => (
            <PokemonCard key={pokemon.id} index={index} pokemon={pokemon} />
          ))}
        </PokemonGrid>
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title="Home" />

export default IndexPage
