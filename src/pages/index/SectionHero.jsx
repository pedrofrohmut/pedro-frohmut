import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const SectionHeroStyled = styled.section`
  position: relative;

  h1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    top: 42%;
    transform: translateY(-50%);
    color: var(--fullWhite);
    font-weight: 400;
    text-align: center;
    margin: 0;
    padding: 1.3rem;
    background: var(--dimmedBlack6);
  }

  .title {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    font-size: 0.95rem;
  }

  img {
    max-width: 100vw;
    width: auto;
    opacity: 0.92;
  }

  @media (min-width: 1200px) {
    margin: 0 auto;

    h1 {
      padding: 4rem 0;
    }

    .title {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .subtitle {
      font-size: 1.4rem;
    }
  }
`

const SectionHero = ({ heroUrl, heroTitle }) => (
  <SectionHeroStyled className="SectionHero">
    <div className="image-wrapper">
      <img src={heroUrl} alt={heroTitle} />
    </div>
    <h1>
      <div className="title">
        Hi I'm
        {" "}
        <strong>Pedro Frohmut</strong>
        {" "}
a Full-Stack Developer
      </div>
      <div className="subtitle">
        Developing with ReactJs and AspNetCore to make great websites
      </div>
    </h1>
  </SectionHeroStyled>
)

SectionHero.propTypes = {
  heroUrl: PropTypes.string.isRequired,
  heroTitle: PropTypes.string.isRequired
}

export default SectionHero
