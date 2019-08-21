import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import Header from "./Header"
import Footer from "./Footer"

import "../../styles/index.css"

const Layout = ({ children }) => {
  return (
    <LayoutStyled className="Layout">
      <div className="grid-1">
        <Header />
      </div>
      <div className="grid-2">
        <main>{children}</main>
      </div>
      <div className="grid-3">
        <Footer />
      </div>
    </LayoutStyled>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

const LayoutStyled = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 52px auto 52px;
  justify-items: strech;
  align-items: strech;
  grid-gap: 0;
  grid-row-gap: 0;

  .grid-1,
  .grid-2,
  .grid-3 {
    position: relative;
  }

  main {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

export default Layout
