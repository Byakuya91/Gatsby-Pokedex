// ?Other Imports
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  FilterContainer,
  HomeTitle,
  PokemonGrid,
} from "../styles/homepagestyles"

// ? Gatsby imports
import { Link, graphql } from "gatsby"

//? Component imports
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
      <FilterContainer>
        <h1>Pokedex</h1>
        <p>Total Number Of Pokemon: {numOfPokemon}</p>
        <p>
          Search for a Pokemon by name or use the dropdown to select a Pokemon
          type or use both.
        </p>
        <SearchBar search={search} setSearch={setSearch} />
        <Dropdown setType={setType} />
      </FilterContainer>

      {/* Rendering the Pokemon */}
      <div>
        <PokemonGrid>
          {allPokemon
            ?.filter(pokemon => {
              // Check if there is a type and it matches the pokemon's type
              const hasType = type && pokemon.types.includes(type)

              // Check if there is a search term and it matches the pokemon's name
              const hasSearch =
                search &&
                pokemon.name
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())

              // Return the pokemon if there is neither type nor search
              return !type && !search
                ? pokemon
                : // If there is a type but no search, return hasType
                type && !search
                ? hasType
                : // If there is no type but a search, return hasSearch
                !type && search
                ? hasSearch
                : // If both type and search exist, return the intersection of hasType and hasSearch
                  hasType && hasSearch
            })
            ?.map((pokemon, index) => (
              // Map through the filtered pokemon array and render PokemonCard components and links.
              <Link to={`/pokemon/${pokemon.name}`} key={pokemon.id}>
                <PokemonCard index={index} pokemon={pokemon} />
              </Link>
            ))}
        </PokemonGrid>
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title="Home" />

export default IndexPage
