/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 * If you wish to implement server side rendering, you can do it here!
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}
