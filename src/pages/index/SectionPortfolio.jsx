import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import Container from "../../components/containers/Container"

import PortfolioCard from "./PortfolioCard"

const SectionPortfolioStyled = styled.section`
  margin: 2rem auto;
  padding: 1rem 0;

  .container {
    border-radius: 0.5rem;
  }

  h1 {
    font-size: 1.9rem;
    text-align: center;
    color: var(--grey5);
    font-weight: 400;
    box-shadow: 0 0.2rem 0 0 var(--grey6);
  }

  .PortfolioCard {
    margin: 0 auto 4rem;
  }

  @media (min-width: 768px) {
    .container {
      border-top: 6px solid var(--grey8);
      border-bottom: 6px solid var(--grey8);
    }

    .PortfolioCard:nth-child(odd) {
      margin-right: 30%;
    }

    .PortfolioCard:nth-child(even) {
      margin-left: 30%;
    }
  }

  @media (min-width: 1200px) {
    .PortfolioCard:nth-child(odd) {
      margin: 0 auto 4rem;
    }

    .PortfolioCard:nth-child(even) {
      margin: 0 auto 4rem;
    }

    .grid-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      align-items: start;
    }
  }
`

const SectionPortfolio = ({ projects }) => (
  <SectionPortfolioStyled id="portfolio" className="SectionPortfolio">
    <Container className="container">
      <h1>Know my work</h1>
      <div className="grid-container">
        <PortfolioCard
          afterColor="var(--lightBlue)"
          project={projects[0].node}
        />
        <PortfolioCard
          afterColor="var(--lightGreen)"
          project={projects[1].node}
        />
        <PortfolioCard
          afterColor="var(--lightOrange)"
          project={projects[2].node}
        />
        <PortfolioCard
          afterColor="var(--lightPurple)"
          project={projects[3].node}
        />
      </div>
    </Container>
  </SectionPortfolioStyled>
)

SectionPortfolio.propTypes = {
  projects: PropTypes.arrayOf(
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
}

export default SectionPortfolio
