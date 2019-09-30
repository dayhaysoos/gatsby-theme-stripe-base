require('dotenv').config()

module.exports = {
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-stripe',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'image',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
  ],
  siteMetadata: {
    title: 'Gatsby Theme Stripe Base',
    titleTemplate: 'Gatsby Theme Stripe Base',
    description: 'JAMStack solutions for your e-commerce Stripe stores!',
    url: 'https://www.twitter.com/dayhaysoos', // No trailing slash allowed!
    image: '/images/snape.jpg', // Path to your image you placed in the 'static' folder
    socialAccounts: [
      {
        platform: 'twitter',
        url: 'wwww.twitter.com/dayhaysoos',
        userName: '@dayhaysoos',
      },
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/dayhaysoos',
        userName: '@dayhaysoos',
      },
    ],
  },
}
