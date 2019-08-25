import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWindowRestore } from "@fortawesome/free-solid-svg-icons"
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"

const PortfolioCardStyled = styled.div`
  position: relative;
  right: 0.6rem;
  border: 0;
  padding: 1rem;
  background-color: var(--grey7);
  border-radius: 1rem;
  box-shadow: var(--boxShadowCard);

  .wrapper {
    border-radius: 0.7rem;
    padding: 1.2rem;
    background-color: var(--fullWhite);
  }

  .title {
    padding: 0.3rem 0;
    font-weight: 700;
    color: var(--grey2);
    box-shadow: var(--boxShadowLightUnderline);
  }

  .tecnologies {
    font-size: 0.8rem;
    color: var(--grey5);
  }

  .links {
    a {
      font-size: 0.9rem;
      color: var(--grey4);
      margin-right: 1.2rem;
    }
    svg {
      margin-right: 0.3rem;
      font-size: 1.2rem;
      position: relative;
      top: 2px;
    }
    span {
      box-shadow: var(--boxShadowSmallUnderline);
    }
  }

  &::after {
    content: "";
    height: 100%;
    width: 100%;
    bottom: -0.2rem;
    left: 1.2rem;
    top: 1.2rem;
    background-color: ${(props) => props.afterColor};
    position: absolute;
    z-index: -1;
    border: 0;
    border-radius: 1rem;
    opacity: 0.5;
  }

  @media (min-width: 480px) {
    max-width: 480px;
  }

  @media (min-width: 1200px) {
    height: 20rem;

    .wrapper {
      height: 100%;
    }

    .description {
      height: 6rem;
    }

    .tecnologies {
      height: 2.5rem;
    }
  }
`

const PortfolioCard = ({ project, afterColor }) => {
  if (!project) return <>loading...</>
  const {
    title, description, tecnologies, projectLink, githubLink
  } = project
  return (
    <PortfolioCardStyled afterColor={afterColor} className="PortfolioCard">
      {project && (
        <div className="wrapper">
          <p className="title">{title}</p>
          <p className="description">{description}</p>
          <p className="tecnologies">{tecnologies}</p>
          <p className="links">
            <a href={projectLink}>
              <FontAwesomeIcon icon={faWindowRestore} />
              <span>Project</span>
            </a>
            <a href={githubLink}>
              <FontAwesomeIcon icon={faGithubSquare} />
              <span>Github</span>
            </a>
          </p>
        </div>
      )}
    </PortfolioCardStyled>
  )
}

PortfolioCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tecnologies: PropTypes.string.isRequired,
    projectLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired
  }).isRequired,
  afterColor: PropTypes.string
}

PortfolioCard.defaultProps = {
  afterColor: "var(--grey8)"
}

export default PortfolioCard
