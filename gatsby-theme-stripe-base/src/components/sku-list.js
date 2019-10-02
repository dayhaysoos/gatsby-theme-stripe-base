/** @jsx jsx */
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { jsx } from 'theme-ui'
import { useCart } from '../context/shopping-cart'
import AddItemButton from './add-item-button'
import SkuImage from './sku-list/sku-image'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const SkuList = () => {
  const data = useStaticQuery(graphql`
    query {
      allStripeSku {
        nodes {
          name
          price
          currency
          slug
          skuID
          localImage {
            childImageSharp {
              fixed(height: 200, width: 200) {
                base64
                tracedSVG
                aspectRatio
                width
                height
                src
                srcSet
                srcWebp
                srcSetWebp
                originalName
              }
            }
          }
        }
      }
    }
  `)

  const skus = data.allStripeSku.nodes

  return (
    <Card sx={{ variant: 'ul.skuList' }}>
      {skus.map(sku => {
        const { localImage, name, skuID, price } = sku

        return (
          <CardContent key={skuID} sx={{ variant: 'li.purchaseItem' }}>
            <section sx={{ variant: 'section.itemDetails' }}>
              <div css={{ maxHeight: '200px', height: '200px' }}>
                <SkuImage size={200} image={localImage} name={name} />
              </div>
              <p>{name}</p>
              <p>{price}</p>
            </section>
            <section sx={{ variant: 'section.buttonWrapper' }}>
              <AddItemButton sku={sku} />
            </section>
          </CardContent>
        )
      })}
    </Card>
  )
}

export default SkuList
