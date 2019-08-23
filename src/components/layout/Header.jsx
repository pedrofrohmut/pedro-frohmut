import React from "react"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"

import Container from "../containers/Container"

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata
  return (
    <HeaderStyled className="Header">
      <Container className="Container">
        <Link to="/" className="logo">
          {title}
        </Link>

        <label htmlFor="nav-toggle" className="nav-toggle-label">
          navigation
        </label>

        <input id="nav-toggle" type="checkbox" className="nav-toggle" />

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  padding: 0.8rem 0;
  background: var(--fullWhite);
  color: var(--grey3);
  font-size: 1rem;
  font-weight: 400;
  box-shadow: var(--boxShadow);

  .Container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-size: 1.3rem;
  }

  .nav-toggle {
    display: none;
  }

  .nav-toggle:checked + nav {
    transform: scaleY(1);
    opacity: 1;
  }

  nav {
    position: absolute;
    text-align: left;
    top: 100%;
    left: 0;
    background-color: var(--fullWhite);
    width: 100%;
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
    transition: all 500ms ease-in-out;
  }

  nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
    border-top: 2px solid var(--grey5);
  }

  nav li {
    padding: 1rem 2rem;
    border-bottom: 2px solid var(--grey5);
  }

  nav li:hover,
  nav li:focus {
    background: var(--grey8);
  }

  nav a {
    display: block;
  }

  a {
    color: var(--grey3);
    outline: none;
    position: relative;

    &:hover,
    &:focus {
      opacity: 1;
    }

    &::after {
      content: "";
      height: 2px;
      bottom: -0.2rem;
      right: 0;
      left: 0;
      background-color: var(--grey5);
      position: absolute;
      transform: scaleY(0);
      transition: transform 250ms ease-in;
    }

    &:hover:after,
    &:focus:after {
      transform: scaleY(1);
    }
  }

  @media (min-width: 768px) {
    .nav-toggle-label {
      display: none;
    }

    nav {
      position: unset;
      text-align: center;
      opacity: 1;
      transform: unset;
      width: auto;
    }

    nav ul {
      border: 0;
    }

    nav li {
      display: inline-block;
      border: 0;
      padding: 0;
      margin: 0 0.9rem;
    }

    nav li:hover,
    nav li:focus {
      background: transparent;
    }

    nav a {
      display: inline;
      margin: 0;
      padding: 0.3rem 0.3rem;
    }
  }

  @media (min-width: 1200px) {
    a {
      opacity: 0.6;

      &:hover,
      &:focus {
        opacity: 1;
      }
    }
  }
`

export default Header
