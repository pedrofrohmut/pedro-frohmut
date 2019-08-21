import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout/Layout"
import Image from "../components/Image"
import SEO from "../components/Seo"

import heroImg from "../images/Hero.jpg"

const IndexPage = () => (
  <Layout>
    <IndexPageStyled className="IndexPage">
      <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="container">
          <h1>
            Elit reiciendis laboriosam minima vel
            <span>Elit minima quidem doloremque laboriosam.</span>
          </h1>
          <a className="hero-button" href="#">
            Elit voluptates qui
          </a>
        </div>
      </section>
    </IndexPageStyled>
  </Layout>
)

const IndexPageStyled = styled.div`
  section.hero {
    height: 100vh;
    position: relative;
  }
`

export default IndexPage
