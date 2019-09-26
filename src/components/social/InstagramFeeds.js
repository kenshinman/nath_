import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const InstagramFeeds = () => {
  const posts = useStaticQuery(graphql`
    {
      allInstaNode {
        edges {
          node {
            id
            likes
            comments
            mediaType
            thumbnails {
              src
              config_width
              config_height
            }
            dimensions {
              height
              width
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <h2>Instagram Feeds</h2>
      {posts.allInstaNode.edges.splice(0, 9).map(post => {
        return (
          <div key={post.node.id} className="p-1 d-md-inline-block">
            <a href={`https://instagram.com/p/${post.node.id}`} target="_blank">
              <img
                className="rounded-left rounded-right"
                width="100px"
                height="100px"
                src={post.node.thumbnails[0].src}
                alt=""
              />
            </a>
          </div>
        )
      })}
    </>
  )
}

export default InstagramFeeds
