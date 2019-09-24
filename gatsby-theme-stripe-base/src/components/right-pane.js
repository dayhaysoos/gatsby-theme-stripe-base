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
    <div css={{ overflowY: 'scroll', display: 'flex', flexDiretion: 'row' }}>
      <aside
        sx={{
          variant: toggleRightMenu
            ? 'aside.rightPaneShow'
            : 'aside.rightPaneHidden',
        }}
      >
        <ShoppingCartDetails />
        <div
          css={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <button sx={{ variant: 'button.checkout' }} onClick={handleCartClick}>
            Close Menu
          </button>
          <button
            sx={{
              variant: cartCount > 0 ? 'button.checkout' : 'button.disabled',
            }}
            onClick={() => redirectToCheckout()}
          >
            Checkout{' '}
          </button>
        </div>
      </aside>
    </div>
  )
}

export default RightPane
