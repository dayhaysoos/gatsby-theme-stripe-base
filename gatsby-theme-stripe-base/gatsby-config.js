require("dotenv").config();

module.exports = {
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-stripe",
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`
      }
    }
  ],
  siteMetadata: {
    title: `Gatsby Theme Stripe Base`,
    author: `Nick DeJesus`,
    description: ``,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/resilientcoders`
      }
    ]
  }
};
