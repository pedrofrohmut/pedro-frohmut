import React from "react"
import styled from "styled-components"

const Footer = () => (
  <FooterStyled className="Footer">
    Created by Pedro Frohmut, &copy; 2019
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
