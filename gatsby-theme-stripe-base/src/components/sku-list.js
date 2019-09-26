/** @jsx jsx */
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { jsx } from 'theme-ui'
import { useCart } from '../context/shopping-cart'
import AddItemButton from './add-item-button'
import { FaImage } from 'react-icons/fa'
import SkuImage from './sku-list/sku-image'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const renderSkuList = skus => {
  return (
    <Card sx={{ variant: 'ul.skuList' }}>
      {skus.map(sku => (
        <CardContent key={sku.id} sx={{ variant: 'li.purchaseItem' }}>
          <section sx={{ variant: 'section.itemDetails' }}>
            <div css={{ maxHeight: '200px', height: '200px' }}>
              <SkuImage size={200} image={sku.image} name={sku.name} />
            </div>
            <p>{sku.name}</p>
            <p>{sku.price}</p>
          </section>
          <section sx={{ variant: 'section.buttonWrapper' }}>
            <AddItemButton sku={sku} />
          </section>
        </CardContent>
      ))}
    </Card>
  )
}

const SkuList = () => {
  const { cartCount } = useCart()

  const data = useStaticQuery(graphql`
    query {
      allStripeSku {
        nodes {
          name
          price
          currency
          slug
          image
          skuID
        }
      }
    }
  `)

  const skus = data.allStripeSku.nodes

  return <>{renderSkuList(skus, cartCount)}</>
}

export default SkuList
