/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { FaImage } from 'react-icons/fa'

const SkuImage = ({ image, name, size }) => {
  return (
    <>
      {image === 'no-image' ? (
        <FaImage size={size} />
      ) : (
        <img alt={name} sx={{ variant: 'img.skuList' }} src={image} />
      )}
    </>
  )
}

export default SkuImage
