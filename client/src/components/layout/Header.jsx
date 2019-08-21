import React, { useState } from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"

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
      <h1>
        <Link to="/">{title}</Link>
      </h1>

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

      <label className="nav-button">
        Navigation
        <input type="checkbox" />
      </label>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  color: var(--fullWhite);
  background-color: var(--dimmedBlack);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 400;
    display: inline-block;
    padding: 0 0 0 1rem;
  }

  a {
    color: var(--fullWhite);
  }

  nav ul {
    position: absolute;
    right: 0;
    left: 0;
    top: 50px;
    background-color: var(--dimmedBlack);
  }

  nav li {
    width: 100%;
    border-top: 2px solid var(--fullWhite);
  }

  nav a {
    display: block;
    padding: 0.8rem 1.6rem;
  }

  .nav-button {
    margin-right: 1rem;
  }

  @media (min-width: 768px) {
    nav ul {
      position: static;
      background-color: unset;
    }

    nav li {
      display: inline;
      border: 0;
    }

    nav a {
      display: inline-block;
    }

    .nav-button {
      display: none;
    }
  }
`

export default Header
