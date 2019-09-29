/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { FaImage } from 'react-icons/fa'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

// const breakpoints = [500]

// const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

const SkuImage = ({ image, name, size }) => {
  const imageData = graphql`
    query {
      allImageSharp {
        edges {
          node {
            id
            original {
              height
            }
            fluid(maxHeight: 10) {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
              presentationWidth
              presentationHeight
            }
          }
        }
      }
    }
  `

  console.log('image data', imageData)

  return (
    <>
      {image === 'no-image' ? (
        <FaImage
          // css={{
          //   [mq[0]]: {
          //     display: 'none',
          //   },
          // }}
          size={size}
        />
      ) : (
        <img
          // css={{
          //   [mq[0]]: {
          //     display: 'none',
          //   },
          // }}
          alt={name}
          sx={{ variant: 'img.skuList' }}
          src={image}
        />
      )}
    </>
  )
}

export default SkuImage

// import React from "react"
// import { graphql } from "gatsby"
// import Img from "gatsby-image"

// export default ({ data }) => (
//   <div>
//     <h1>Hello gatsby-image</h1>
//     <Img fixed={data.file.childImageSharp.fixed} />
//   </div>
// )

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "blog/avatars/kyle-mathews.jpeg" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `
