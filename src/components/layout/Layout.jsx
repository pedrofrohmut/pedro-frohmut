import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import SEO from "./SEO"
import Header from "./Header"
import Footer from "./Footer"

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
    <SEO />
    <Header />
    <main>{children}</main>
    <Footer />
  </LayoutStyled>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
