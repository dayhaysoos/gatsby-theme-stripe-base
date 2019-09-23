/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { useCart } from '../../context/shopping-cart'
import SkuImage from '../sku-list/sku-image'
import { FaWindowClose } from 'react-icons/fa'

const ShoppingCartDetails = () => {
  const { detailedCart, total, deleteItem, handleQuantityChange } = useCart()

  const updateInputValue = (e, skuID) => {
    const { value } = e.target
    handleQuantityChange(parseInt(value), skuID)
  }

  return (
    <>
      <div
        css={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: '1px solid gray',
        }}
      >
        <span css={{ fontSize: '12px' }}>Product</span>
        <div
          css={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '150px',
          }}
        >
          <span css={{ fontSize: '12px' }}>Qty</span>
          <span css={{ fontSize: '12px' }}>Remove</span>
        </div>
      </div>
      {detailedCart.map(({ quantity, name, price, image, sku }) => (
        <section
          css={{
            border: '1px solid black',
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            css={{
              display: 'flex',
              width: '100%',
            }}
          >
            <SkuImage size={40} name={name} image={image} />
            <p css={{ fontSize: '14px', marginLeft: '20px' }}>{name}</p>
            <p css={{ fontSize: '14px', marginLeft: '20px' }}>{price}</p>
          </div>
          <div
            css={{
              display: 'flex',
              flexDirection: 'row',
              width: '150px',
            }}
          >
            <input
              sx={{ variant: 'field.checkout' }}
              type="number"
              placeholder={'Enter Amount'}
              name={name}
              onChange={e => updateInputValue(e, sku)}
              defaultValue={quantity}
              min={0}
            />
            <button
              type="submit"
              onClick={() => deleteItem(sku)}
              sx={{ variant: 'button.checkout.closeWindow' }}
            >
              <FaWindowClose size={30} />
            </button>
          </div>
        </section>
      ))}
      <span css={{ textAlign: 'center' }}>{total}</span>
    </>
  )
}

export default ShoppingCartDetails
