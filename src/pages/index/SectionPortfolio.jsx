import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import Container from "../../components/containers/Container"

import PortfolioCard from "./PortfolioCard"

const SectionPortfolioStyled = styled.section`
  margin: 2rem auto;
  padding: 1rem 0;

  .container {
    border-top: 6px solid var(--grey8);
    border-bottom: 6px solid var(--grey8);
    border-radius: 0.5rem;
  }

  h1 {
    font-size: 2.6rem;
    text-align: center;
    color: var(--grey5);
    font-weight: 400;
  }

  .PortfolioCard {
    margin-bottom: 3rem;
  }
`

const SectionPortfolio = ({ projects }) => (
  <SectionPortfolioStyled id="portfolio" className="SectionPortfolio">
    <Container className="container">
      <h1>Know my work</h1>
      <PortfolioCard afterColor="var(--lightBlue)" project={projects[0]} />
      <PortfolioCard afterColor="var(--lightGreen)" project={projects[1]} />
      <PortfolioCard afterColor="var(--lightOrange)" project={projects[2]} />
      <PortfolioCard afterColor="var(--lightPurple)" project={projects[3]} />
    </Container>
  </SectionPortfolioStyled>
)

SectionPortfolio.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      tecnologies: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default SectionPortfolio
