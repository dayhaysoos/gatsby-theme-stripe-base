/** @jsx jsx */
import React from 'react'
import { Layout as ThemeLayout, Main, jsx } from 'theme-ui'

const Layout = ({ children }) => (
  <ThemeLayout>
    <Main>{children}</Main>
  </ThemeLayout>
)

export default Layout
