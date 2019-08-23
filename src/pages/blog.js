import React from "react"
import styled from "styled-components"

import Layout from "../components/layout/Layout"

const BlogPage = () => {
  const data = "TODO: get [title, slug, publishedAt] from contentful"
  return (
    <Layout>
      <BlogPageStyled className="BlogPage">
        {/* TODO: add Head Here */}
        <h1>Blog Page</h1>
      </BlogPageStyled>
    </Layout>
  )
}

const BlogPageStyled = styled.div``

export default BlogPage
