/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { useCart } from '../context/shopping-cart'
import { navigate } from 'gatsby'
import ShoppingCartDetails from './right-pane/shopping-cart-details'

const RightPane = () => {
  const { toggleRightMenu, handleCartClick, redirectToCheckout } = useCart()

  return (
    <aside
      sx={{
        variant: toggleRightMenu
          ? 'aside.rightPaneShow'
          : 'aside.rightPaneHidden',
      }}
    >
      <button onClick={handleCartClick}>Close</button>
      Right Pane
      <ShoppingCartDetails />
      <button onClick={redirectToCheckout}>Checkout </button>
    </aside>
  )
}

export default RightPane
