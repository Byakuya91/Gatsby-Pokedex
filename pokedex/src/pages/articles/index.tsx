import * as React from "react"
import Seo from "../../components/seo"
import Layout from "../../components/layout"
import { HomeTitle } from "../../styles/homepageStyles"

const PokeBlogs = () => (
  <Layout>
    <HomeTitle>PokeBlogs</HomeTitle>
  </Layout>
)

export const Head = () => <Seo title="Poke Blogs" />

export default PokeBlogs
