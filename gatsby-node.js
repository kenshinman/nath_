/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const data = require("./src/data/data.json")
const albums = data.albums

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const template = path.resolve("./src/templates/AlbumPage.js")

  albums.forEach(album => {
    var path = `/album/${album.slug}`

    createPage({
      path,
      component: template,
      context: album,
    })
  })
}
