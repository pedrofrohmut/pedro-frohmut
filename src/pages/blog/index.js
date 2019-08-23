import React from "react"
import styled from "styled-components"

import Layout from "../../components/layout/Layout"
import Container from "../../components/containers/Container"

// const data = "TODO: get [title, slug, publishedAt] from contentful"

const BlogPageStyled = styled.div``

const BlogPage = () => (
  <Layout>
    <BlogPageStyled className="BlogPage">
      <Container>
        <h1>Blog Page</h1>
      </Container>
    </BlogPageStyled>
  </Layout>
)

export default BlogPage
