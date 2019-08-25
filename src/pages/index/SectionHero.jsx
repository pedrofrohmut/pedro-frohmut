import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import Container from "../../components/containers/Container"

const SectionHeroStyled = styled.section`
  clear: both;
  position: relative;
  padding: 2rem 0;

  .perfil-wrapper {
    border: 1px dashed red;
  }

  .perfil-card {
    background-color: var(--fullWhite);
  }

  .title {
    font-size: 1.5rem;
    color: var(--grey2);
  }

  .title::first-letter {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1.15rem;
    color: var(--grey4);
    margin-bottom: 2rem;
  }

  .logos {
    text-align: right;
    padding-right: 5vw;
  }

  .logo {
    max-height: 13vw;
    padding-right: 4vw;
    display: inline;
    opacity: 0.9;
  }

  .perfil-image {
    max-width: 38vw;
    position: relative;
    top: -3.5rem;
    opacity: 0.9;
  }

  @media (min-width: 480px) {
    .perfil-card {
      padding: 2.2rem;
    }

    .logos {
      padding-right: 10vw;
    }

    .perfil-image {
      max-width: 30vw;
      top: -6.5rem;
      left: 2.2rem;
    }
  }

  @media (min-width: 768px) {
    .wrapper {
      margin: 0 auto;
      position: relative;
      max-width: 720px;
    }
    .perfil-card {
      padding: 4rem 0.5rem 4rem 12rem;
    }

    .subtitle {
      margin-bottom: 0;
    }

    .perfil-image {
      position: absolute;
      top: 4rem;
      left: 0.5rem;
      max-height: 220px;
    }
  }

  @media (min-width: 1200px) {
  }
`

const SectionHero = ({
  heroUrl,
  heroTitle,
  perfilTitle,
  perfilUrl,
  reactUrl,
  reactTitle,
  dotnetcoreUrl,
  dotnetcoreTitle
}) => (
  <SectionHeroStyled className="SectionHero">
    <Container>
      <div className="wrapper">
        <div className="perfil-card">
          <div className="title">
            Hi I'm
            {" "}
            <strong>Pedro frohmut</strong>
            ll-Stack developer
          </div>
          <div className="subtitle">
            Making scalable web apps with ReactJS and AspNetCore. Good looking
            and grow-frendly user interfaces as front end with a cross-platform
            and high-performance backend
          </div>
          <div className="logos">
            <img className="react-logo logo" src={reactUrl} alt={reactTitle} />
            <img
              className="aspnetcore-logo logo"
              src={dotnetcoreUrl}
              alt={dotnetcoreTitle}
            />
          </div>
        </div>
        <img className="perfil-image" src={perfilUrl} alt={perfilTitle} />
      </div>
    </Container>
  </SectionHeroStyled>
)

SectionHero.propTypes = {
  heroUrl: PropTypes.string.isRequired,
  heroTitle: PropTypes.string.isRequired,
  perfilTitle: PropTypes.string.isRequired,
  perfilUrl: PropTypes.string.isRequired,
  reactUrl: PropTypes.string.isRequired,
  reactTitle: PropTypes.string.isRequired,
  dotnetcoreUrl: PropTypes.string.isRequired,
  dotnetcoreTitle: PropTypes.string.isRequired
}

export default SectionHero
