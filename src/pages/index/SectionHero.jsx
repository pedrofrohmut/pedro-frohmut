import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import Container from "../../components/containers/Container"

const SectionHeroStyled = styled.section`
  clear: both;
  position: relative;
  padding: 2rem 0;

  .wrapper {
    background-color: var(--fullWhite);
  }

  .perfil-card {
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

  .my-work-link {
    padding: 0.8em 1.6em;
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translate(-50%);
    margin-bottom: 2.3rem;
    color: var(--fullWhite);
    background-color: var(--grey1);
    font-weight: 700;
    outline: none;
  }

  .logos {
    text-align: right;
    padding-right: 5vw;
  }

  .logo {
    height: 13vw;
    max-height: 50px;
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
      margin-bottom: 1.4rem;
    }

    .my-work-link {
      position: unset;
      transform: unset;
    }

    .logos {
      display: inline-block;
      position: relative;
      top: 1.1rem;
      padding: 0;
      margin-left: 3rem;
    }

    .perfil-image {
      position: absolute;
      top: 4rem;
      left: 0.5rem;
      max-height: 220px;
    }
  }

  @media (min-width: 1200px) {
    background-image: url(${(props) => props.heroUrl});
    height: 100vh;

    .container {
      max-width: 100%;
      padding: 0;
      background-color: #121212d3;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }

    .wrapper {
      max-width: 980px;
      background-color: transparent;
    }

    .title {
      color: var(--grey7);
    }

    .subtitle {
      color: var(--grey5);
    }

    .my-work-link {
      border: 3px solid var(--grey7);
      color: var(--grey7);
      background: transparent;

      &:hover,
      &:focus {
        background-color: var(--grey7);
        color: var(--grey1);
        text-shadow: var(--textShadow);
      }
    }

    .logo {
      max-height: 62px;
    }
  }
`

const SectionHero = ({
  heroUrl,
  perfilTitle,
  perfilUrl,
  reactUrl,
  reactTitle,
  dotnetcoreUrl,
  dotnetcoreTitle
}) => (
  <SectionHeroStyled
    id="section-hero"
    heroUrl={heroUrl}
    className="SectionHero"
  >
    <Container className="container">
      <div className="wrapper">
        <div className="perfil-card">
          <div className="title">
            Hi I'm
            <strong> Pedro frohmut</strong>
, a Full-Stack developer
          </div>
          <div className="subtitle">
            Making scalable web apps with ReactJS and AspNetCore. Good looking
            and grow-frendly user interfaces with a cross-platform and
            high-performance backend
          </div>
          <a className="my-work-link" href="#section-portfolio">
            See My Work
          </a>
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
  perfilTitle: PropTypes.string.isRequired,
  perfilUrl: PropTypes.string.isRequired,
  reactUrl: PropTypes.string.isRequired,
  reactTitle: PropTypes.string.isRequired,
  dotnetcoreUrl: PropTypes.string.isRequired,
  dotnetcoreTitle: PropTypes.string.isRequired
}

export default SectionHero
