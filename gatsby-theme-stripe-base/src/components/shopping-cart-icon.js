/** @jsx jsx */
import React from 'react'
import { useCart } from '../context/shopping-cart'
import { jsx } from 'theme-ui'
import { navigate } from 'gatsby'
import { FaShoppingCart } from 'react-icons/fa'

const ShoppingCartIcon = () => {
  const { cartCount, handleCartClick } = useCart()
  return (
    <button onClick={handleCartClick} sx={{ variant: 'button.cartIcon' }}>
      <FaShoppingCart size={30} />
      {cartCount > 0 && (
        <span sx={{ variant: 'span.cartCount' }}>{cartCount}</span>
      )}
    </button>
  )
}

export default ShoppingCartIcon
