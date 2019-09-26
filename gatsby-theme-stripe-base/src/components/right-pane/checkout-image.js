/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { FaImage } from 'react-icons/fa'

const CheckoutImage = ({ image, name, size }) => {
  return (
    <>
      {image === 'no-image' ? (
        <FaImage sx={{ variant: 'img.checkout' }} size={size} />
      ) : (
        <img alt={name} sx={{ variant: 'img.checkout' }} src={image} />
      )}
    </>
  )
}

export default CheckoutImage
