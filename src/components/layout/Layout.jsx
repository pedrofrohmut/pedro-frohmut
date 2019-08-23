import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import Footer from "./Footer"
import Header from "./Header"

import "../../styles/index.css"

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    margin-top: 5rem;
    margin-bottom: 3.5rem;
  }

  .Footer {
    margin-top: auto;
  }
`

const Layout = ({ children }) => (
  <LayoutStyled className="Layout">
    <Header />
    <main>{children}</main>
    <Footer />
  </LayoutStyled>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
