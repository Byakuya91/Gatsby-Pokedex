import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { HomeTitle } from "../styles/homepagestyles"

// TODOs0: Connect to Nintendo API(ONGOING)
// TODO1: Render out the Pokedex cards(NEEDS TO BE DONE)
// TODO2: Style the cards and work on the layouts(NEEDS TO BE DONE)
// TODO3: filter and search functionality(NEEDS TO BE DONE)

const IndexPage = () => (
  <Layout>
    <HomeTitle>Home page</HomeTitle>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
