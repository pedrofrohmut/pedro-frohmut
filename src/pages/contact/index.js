import React from "react"
import styled from "styled-components"

import Layout from "../../components/layout/Layout"
import Container from "../../components/containers/Container"

const ContactPageStyled = styled.div``

const ContactPage = () => (
  <Layout>
    <ContactPageStyled className="ContactPage">
      <Container>
        <h1>Contact Page</h1>
      </Container>
    </ContactPageStyled>
  </Layout>
)

export default ContactPage
