import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { HomeTitle } from "../styles/homepagestyles"
import { graphql } from "gatsby"
import { AllPokemonType } from "../types/pokemon"

// TODOs0: Connect to Nintendo API(ONGOING)
// TODO1: Render out the Pokedex cards(NEEDS TO BE DONE)
// TODO2: Style the cards and work on the layouts(NEEDS TO BE DONE)
// TODO3: filter and search functionality(NEEDS TO BE DONE)

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
  console.log(data, "homepagedata")

  return (
    <Layout>
      <HomeTitle>Home page</HomeTitle>
    </Layout>
  )
}
export const Head = () => <Seo title="Home" />

export default IndexPage
