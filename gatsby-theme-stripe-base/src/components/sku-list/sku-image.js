/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { FaImage } from 'react-icons/fa'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import SEO from '../SEO'

const SkuImage = ({ image, name, size }) => {
  return (
    <>
      {image === null ? (
        <FaImage size={size} />
      ) : (
        <Img
          alt={name}
          sx={{ variant: 'img.skuList' }}
          fixed={image.childImageSharp.fixed}
        />
      )}
    </>
  )
}

export default SkuImage
