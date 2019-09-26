/** @jsx jsx */
import React from 'react'
import { useCart } from '../context/shopping-cart'
import { jsx } from 'theme-ui'
import Button from '@material-ui/core/Button'

const AddItemButton = ({ sku }) => {
  const { skuID } = sku
  const { addItem } = useCart()

  const handleClick = e => {
    e.preventDefault()
    addItem({ skuID, quantity: 1 })
  }

  return (
    <Button
      variant={'contained'}
      sx={{ variant: 'button.cart' }}
      onClick={handleClick}
    >
      Add to Cart
    </Button>
  )
}

export default AddItemButton
