import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { HeaderWrapper, LogoContainer } from "./styles"
import { GatsbyImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => {
  const headerLogo = useStaticQuery(
    graphql`
      query HeaderLogo {
        allImageSharp(filter: { fluid: { src: {} }, gatsbyImageData: {} }) {
          edges {
            node {
              gatsbyImageData
            }
          }
        }
      }
    `
  )

  const pokeball_Image =
    headerLogo?.allImageSharp?.edges[0]?.node?.gatsbyImageData

  return (
    <HeaderWrapper>
      <Link to="/">{siteTitle}</Link>
      <LogoContainer>
        <Link to="/">
          <GatsbyImage image={pokeball_Image} alt="pokemon logo" />
        </Link>
      </LogoContainer>
      <Link to="/articles">Articles</Link>
    </HeaderWrapper>
  )
}

export default Header
