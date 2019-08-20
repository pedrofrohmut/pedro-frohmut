import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import Header from "./Header"
import Footer from "./Footer"

import "../../styles/index.css"

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <Header />
      <main>
        <div class="container">{children}</div>
      </main>
      <Footer />
    </LayoutStyled>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

const LayoutStyled = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 50px 1fr 50px;
`

export default Layout
