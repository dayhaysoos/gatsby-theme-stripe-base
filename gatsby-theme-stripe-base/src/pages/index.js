import React from 'react'
import { useCart } from '../context/shopping-cart'
import Layout from '../components/layout'
import ShoppingCartIcon from '../components/shopping-cart-icon'

const App = () => {
  return (
    <Layout>
      <ShoppingCartIcon />
    </Layout>
  )
}

export default App
