import React from "react"
import styled from "styled-components"

import Layout from "../../components/layout/Layout"
import Container from "../../components/containers/Container"

const ContactPageStyled = styled.div``

const ContactPage = () => (
  <Layout>
    <ContactPageStyled className="ContactPage">
      <Container>
        <h1>Contact</h1>
        <p>Pedro Henrique Frohmut Fonseca</p>
        <p>
          <strong>Tel: </strong>
          (11) 9-3085-2662
        </p>
        <p>
          <strong>E-mail: </strong>
          pedrofrohmut@gmail.com
        </p>
        <p>
          <strong>Github: </strong>
          https://github.com/pedrofrohmut
        </p>
      </Container>
    </ContactPageStyled>
  </Layout>
)

export default ContactPage
