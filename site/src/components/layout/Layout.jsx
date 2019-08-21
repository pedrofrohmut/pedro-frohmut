import React from "react"
import styled from "styled-components"

import "../../styles/index.css"

const Layout = ({ children }) => (
  <LayoutStyled className="Layout">{children}</LayoutStyled>
)

const LayoutStyled = styled.div``

export default Layout
