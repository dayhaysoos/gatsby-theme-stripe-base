/** @jsx jsx */
import React from 'react'
import { useCart } from '../context/shopping-cart'
import Layout from '../components/layout'
import ShoppingCartIcon from '../components/shopping-cart-icon'
import { Layout as ThemeLayout, jsx, Styled } from 'theme-ui'
import Header from '../components/header'
import SkuList from '../components/sku-list'

const App = () => {
  return (
    <ThemeLayout>
      <Header />
      <SkuList />
    </ThemeLayout>
  )
}

export default App
