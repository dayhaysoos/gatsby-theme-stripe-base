/** @jsx jsx */
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { jsx } from 'theme-ui'
import { useCart } from '../context/shopping-cart'
import AddItemButton from './add-item-button'
import { FaImage } from 'react-icons/fa'
import SkuImage from './sku-list/sku-image'

const renderSkuList = skus => {
  return (
    <ul sx={{ variant: 'ul.skuList' }}>
      {skus.map(sku => (
        <li key={sku.id} sx={{ variant: 'li.purchaseItem' }}>
          <section sx={{ variant: 'section.itemDetails' }}>
            <SkuImage size={200} image={sku.image} name={sku.name} />
            <p>{sku.name}</p>
            <p>USD:{sku.price}</p>
          </section>
          <section sx={{ variant: 'section.buttonWrapper' }}>
            <AddItemButton sku={sku} />
          </section>
        </li>
      ))}
    </ul>
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
