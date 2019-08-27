import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/layout/Layout"

import SectionHero from "./index/SectionHero"
import SectionPortfolio from "./index/SectionPortfolio"

export const query = graphql`
  {
    allContentfulAsset {
      edges {
        node {
          title
          file {
            url
          }
        }
      }
    }

    allContentfulPortfolioProject(sort: { fields: createdAt }) {
      edges {
        node {
          id
          title
          description
          tecnologies
          projectLink
          githubLink
        }
      }
    }
  }
`

const IndexPageStyled = styled.div`
  margin-top: -1.8rem;
`

const IndexPage = ({ data }) => {
  const heroEdge = data.allContentfulAsset.edges.find(
    (edge) => edge.node.title === "hero-png8"
  )
  const heroTitle = heroEdge.node.title
  const heroUrl = heroEdge.node.file.url
  const perfilEdge = data.allContentfulAsset.edges.find(
    (edge) => edge.node.title === "foto-perfil-alta"
  )
  const perfilTitle = perfilEdge.node.title
  const perfilUrl = perfilEdge.node.file.url
  const reactEdge = data.allContentfulAsset.edges.find(
    (edge) => edge.node.title === "react-200"
  )
  const reactTitle = reactEdge.node.title
  const reactUrl = reactEdge.node.file.url
  const dotnetcoreEdge = data.allContentfulAsset.edges.find(
    (edge) => edge.node.title === "dotnetcore-200"
  )
  const dotnetcoreTitle = dotnetcoreEdge.node.title
  const dotnetcoreUrl = dotnetcoreEdge.node.file.url
  const projects = data.allContentfulPortfolioProject.edges
  return (
    <Layout>
      <IndexPageStyled className="IndexPage">
        <SectionHero
          heroUrl={heroUrl}
          heroTitle={heroTitle}
          perfilUrl={perfilUrl}
          perfilTitle={perfilTitle}
          reactUrl={reactUrl}
          reactTitle={reactTitle}
          dotnetcoreUrl={dotnetcoreUrl}
          dotnetcoreTitle={dotnetcoreTitle}
        />
        <SectionPortfolio projects={projects} />
      </IndexPageStyled>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allContentfulAsset: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            title: PropTypes.string.isRequired,
            file: PropTypes.shape({
              url: PropTypes.string.isRequired
            }).isRequired
          }).isRequired
        }).isRequired
      ).isRequired
    }).isRequired,

    allContentfulPortfolioProject: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            tecnologies: PropTypes.string.isRequired,
            projectLink: PropTypes.string.isRequired,
            githubLink: PropTypes.string.isRequired
          }).isRequired
        }).isRequired
      ).isRequired
    }).isRequired
  }).isRequired
}

export default IndexPage
