import * as React from "react"
import Seo from "../../components/seo"
import Layout from "../../components/layout"
import { HomeTitle } from "../../styles/homepageStyles"
import { Link, graphql } from "gatsby"
import { PokeBlogsProps } from "../../types/articles"
import { Article } from "../../styles/articlePageStyles"
// ? GraphQL command to render out the articles MDX within the project
export const query = graphql`
  query PokeBlogs {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        excerpt
      }
    }
  }
`
// ? NOTE: the data is props that's coming from above via "PokeBlogs"
const PokeBlogs: React.FC<PokeBlogsProps> = ({ data }) => {
  const {
    allMdx: { nodes },
  } = data

  // ? Checking the data for the props that's coming from articles.ts
  // console.log(data, "data");

  return (
    <Layout>
      <HomeTitle>PokeBlogs</HomeTitle>
      {nodes.map(node => (
        <Link key={node.id} to={node.frontmatter.slug}>
          <Article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted:{node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </Article>
        </Link>
      ))}
    </Layout>
  )
}

export const Head = () => <Seo title="Poke Blogs" />

export default PokeBlogs
