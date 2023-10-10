import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { HomeTitle } from "../styles/homepagestyles"

const IndexPage = () => (
  <Layout>
    <HomeTitle>Home page</HomeTitle>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
