module.exports = {
  siteMetadata: {
    title: 'Stash Formatter',
    description: 'Formats a Juice Calculator stash XML as a web page.',
    author: '@ayan4m1'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'stash',
        path: `${__dirname}/src/stash`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'stash-formatter',
        /* eslint-disable camelcase */
        short_name: 'stasher',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        /* eslint-enable */
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass'
  ]
};
