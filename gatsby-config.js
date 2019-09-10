/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins:[
    `gatsby-plugin-transition-link`,
    {
      resolve:`gatsby-plugin-manifest`,
      options:{
        icon:`src/media/icon.jpeg`
      }
    }
  ]
}
