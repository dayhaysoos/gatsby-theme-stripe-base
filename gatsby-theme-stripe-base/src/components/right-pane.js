/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { useCart } from '../context/shopping-cart'
import ShoppingCartDetails from './right-pane/shopping-cart-details'
import Button from '@material-ui/core/Button'

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
          <Button
            variant={'contained'}
            color={'primary'}
            sx={{ variant: 'button.checkout' }}
            onClick={handleCartClick}
          >
            Close Menu
          </Button>
          <Button
            variant={'contained'}
            sx={{
              variant: cartCount > 0 ? 'button.checkout' : 'button.disabled',
            }}
            onClick={() => redirectToCheckout()}
          >
            Checkout{' '}
          </Button>
        </div>
      </aside>
    </div>
  )
}

export default RightPane
