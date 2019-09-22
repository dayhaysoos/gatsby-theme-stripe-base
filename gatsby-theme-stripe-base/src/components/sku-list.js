/** @jsx jsx */
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { jsx } from 'theme-ui'
import { useCart } from '../context/shopping-cart'
import AddItemButton from './add-item-button'
import { FaImage } from 'react-icons/fa'

const renderSkuList = skus => {
  return (
    <ul sx={{ variant: 'ul.skuList' }}>
      {skus.map(sku => (
        <li sx={{ variant: 'li.purchaseItem' }} key={sku.id}>
          <section sx={{ variant: 'section.itemDetails' }}>
            {sku.image === 'no-image' ? (
              <FaImage size={200} />
            ) : (
              <img
                alt={sku.name}
                sx={{ variant: 'img.skuList' }}
                src={sku.image}
              />
            )}
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
