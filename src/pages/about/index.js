import React from "react"
import styled from "styled-components"

import Layout from "../../components/layout/Layout"
import Container from "../../components/containers/Container"

const AboutPageStyled = styled.div``

const AboutPage = () => (
  <Layout>
    <AboutPageStyled className="AboutPage">
      <Container>
        <h1>About Page</h1>
      </Container>
    </AboutPageStyled>
  </Layout>
)

export default AboutPage
