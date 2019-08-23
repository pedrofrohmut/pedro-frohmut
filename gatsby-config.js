module.exports = {
  siteMetadata: {
    title: "Pedro Frohmut",
    description:
      "My personal website, where you can contact me or know more about me",
    author: "Pedro Frohmut"
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        displayName: true
      }
    }
  ]
}
