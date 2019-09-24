/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { useCart } from '../context/shopping-cart'
import ShoppingCartDetails from './right-pane/shopping-cart-details'

const RightPane = () => {
  const {
    toggleRightMenu,
    handleCartClick,
    redirectToCheckout,
    cartCount,
  } = useCart()

  return (
    <div css={{ overflowY: 'scroll' }}>
      <aside
        sx={{
          variant: toggleRightMenu
            ? 'aside.rightPaneShow'
            : 'aside.rightPaneHidden',
        }}
      >
        <button
          sx={{ variant: 'button.checkout.closeWindow' }}
          onClick={handleCartClick}
        >
          Close Menu
        </button>
        <ShoppingCartDetails />
        <button
          sx={{
            variant: cartCount > 0 ? 'button.checkout' : 'button.disabled',
          }}
          onClick={() => redirectToCheckout()}
        >
          Checkout{' '}
        </button>
      </aside>
    </div>
  )
}

export default RightPane
