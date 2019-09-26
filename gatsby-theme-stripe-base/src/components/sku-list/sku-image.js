/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { FaImage } from 'react-icons/fa'

// const breakpoints = [500]

// const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

const SkuImage = ({ image, name, size }) => {
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
