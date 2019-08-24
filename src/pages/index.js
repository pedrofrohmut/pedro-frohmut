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
  // TODO: Add projects to Contentful
  const projects = [
    {
      id: 1,
      title: "ECommerce",
      description:
        "A WebSite that simulates an ecommerce that works as a C# and ReactJS sandbox",
      tecnologies:
        "ReactJS, Redux, Thunk, Styled Components, AspNetCore, JWT Authentication, Identity, MailKit, EFCore and Dapper"
    },
    {
      id: 2,
      title: "Coder Share Blog",
      description:
        "A blog where programmers can discuss tecnologies and theories about programming and coding",
      tecnologies:
        "ReactTS (TypeScript), Redux, Redux Saga, Styled Components, AspNetCore, Identity, EFCore, JWT Authentication"
    },
    {
      id: 3,
      title: "Task Manager",
      description:
        "A simple and intuitive app to better manage your time with work to be done and goals to be achived",
      tecnologies:
        "ReactJS, Redux, Thunk, Tailwind CSS(Functional CSS), Spring, Spring Secutiry, Hibernate"
    },
    {
      id: 4,
      title: "Weeklyr",
      description:
        "A personal side project that aims to Plan My Week. Creates an abstraction where I can plan the next week to increase the number and quality of activities in my weekly routine",
      tecnologies: "VueJS and Firebase"
    }
  ]
  return (
    <Layout>
      <IndexPageStyled className="IndexPage">
        <SectionHero heroUrl={heroUrl} heroTitle={heroTitle} />
        <SectionPortfolio projects={projects} />
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
