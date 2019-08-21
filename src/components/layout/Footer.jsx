import React from "react"
import styled from "styled-components"

import PageContainer from "../containers/PageContainer"

const Footer = () => (
  <FooterStyled className="Footer">
    <PageContainer>Created by Pedro Frohmut, &copy; 2019</PageContainer>
  </FooterStyled>
)

const FooterStyled = styled.footer`
  padding: 0.5rem 0 0.6rem;
  font-size: 0.8rem;
  text-align: center;
  color: var(--grey4);
  box-shadow: var(--boxShadow);
`

export default Footer
