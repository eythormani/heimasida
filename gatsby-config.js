module.exports = {
  siteMetadata: {
    title: `Eyþór Máni`,
    description: `Hver eiginlega þessi Eyþór Máni?`,
    author: `@hannesarni @solonorn @eythormani`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#cf0000`,
        theme_color: `#cf0000`,
        display: `minimal-ui`,
        icon: `src/images/main-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-layout`,
    // {
    //   resolve: `gatsby-plugin-transition-link`,
    //   options: {
    //     layout: require.resolve(`./src/layouts/index.js`)
    //   }
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
