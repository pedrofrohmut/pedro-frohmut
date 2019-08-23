import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/layout/Layout"

import SectionHero from "./index/SectionHero"
import SectionPortfolio from "./index/SectionPortfolio"

export const query = graphql`
  {
    contentfulAsset(title: { eq: "hero-maxima-1080" }) {
      title
      file {
        url
      }
    }
  }
`

const IndexPageStyled = styled.div`
  margin-top: -1.3rem;
`

const IndexPage = ({ data }) => {
  const heroTitle = data.contentfulAsset.title
  const heroUrl = data.contentfulAsset.file.url
  return (
    <Layout>
      <IndexPageStyled className="IndexPage">
        <SectionHero heroUrl={heroUrl} heroTitle={heroTitle} />
        <SectionPortfolio />
      </IndexPageStyled>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    contentfulAsset: PropTypes.shape({
      title: PropTypes.string.isRequired,
      file: PropTypes.shape({
        url: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
}

export default IndexPage
