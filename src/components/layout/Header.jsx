import React from "react"
import styled from "styled-components"

import PageContainer from "../containers/PageContainer"

const Header = () => (
  <HeaderStyled className="Header">
    <PageContainer>Pedro Frohmut</PageContainer>
  </HeaderStyled>
)

const HeaderStyled = styled.header`
  padding: 0.5rem 0 0.6rem;
  font-size: 1rem;
  font-weight: 700;
  color: var(--grey4);
  box-shadow: var(--boxShadow);
`

export default Header
