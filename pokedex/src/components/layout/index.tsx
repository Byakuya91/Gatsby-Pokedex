import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import Header from "../Header"
import { Main } from "./styles"
import { defaultTheme } from "../../styles"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={defaultTheme}>
      {/* ?Fetching this from the graphQL query */}
      <Header siteTitle={data?.site?.siteMetadata?.title} />
      <Main>{children}</Main>
    </ThemeProvider>
  )
}

export default Layout
