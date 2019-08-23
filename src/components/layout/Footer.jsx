import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import Container from "../containers/Container"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  const { author } = data.site.siteMetadata
  return (
    <FooterStyled className="Footer">
      <Container>
        {`Created by ${author}, `}
        &copy; 2019
      </Container>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  padding: 0.5rem 0 0.6rem;
  font-size: 0.8rem;
  text-align: center;
  color: var(--grey4);
  box-shadow: var(--boxShadow);
`

export default Footer
