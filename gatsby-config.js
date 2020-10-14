const meta = require('./data/meta.json');

module.exports = {
  siteMetadata: {
    title: meta.siteTitle,
    description: meta.siteDescription,
    author: meta.name,
    siteUrl: meta.siteUrl
  },
  pathPrefix: `/personal-gatsby-website-preview`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/assets`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `assets/profile.png`
      }
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-resolve-src`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`
      }
    },
    `gatsby-transformer-remark`
  ]
};
