/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { FaImage } from 'react-icons/fa'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

// const breakpoints = [500]

// const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

const SkuImage = ({ image, name, size }) => {
  return (
    <>
      {image === null ? (
        <FaImage
          // css={{
          //   [mq[0]]: {
          //     display: 'none',
          //   },
          // }}
          size={size}
        />
      ) : (
        <Img
          // css={{
          //   [mq[0]]: {
          //     display: 'none',
          //   },
          // }}
          alt={name}
          sx={{ variant: 'img.skuList' }}
          fixed={image.childImageSharp.fixed}
        />
      )}
    </>
  )
}

export default SkuImage
