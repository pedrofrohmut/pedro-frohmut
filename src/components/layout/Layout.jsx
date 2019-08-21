import React from "react"
import styled from "styled-components"

import Footer from "./Footer"
import Header from "./Header"

import "../../styles/index.css"

const Layout = ({ children }) => (
  <LayoutStyled className="Layout">
    <Header />
    <main>{children}</main>
    <Footer />
  </LayoutStyled>
)

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    margin-bottom: 3.5rem;
  }

  .Footer {
    margin-top: auto;
  }
`

export default Layout
