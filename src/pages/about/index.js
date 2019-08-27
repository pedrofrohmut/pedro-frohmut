import React from "react"
import styled from "styled-components"

import Layout from "../../components/layout/Layout"
import Container from "../../components/containers/Container"

const AboutPageStyled = styled.div``

const AboutPage = () => (
  <Layout>
    <AboutPageStyled className="AboutPage">
      <Container>
        <h1>Pedro Frohmut</h1>
        <h2>About Me</h2>
        <p>
          I'm a Full-Stack developer that makes the server side and websites as
          user interfaces.
        </p>
        <h3>The Server Side:</h3>
        <p>
          At the Server Side I work with C# and AspNetCore. A stack supported by
          Microsoft the has a long hystory in software development, this server
          tecnologies can be at the same time Secure, Performatic and
          Cross-Platfrom.
        </p>
        <div className="logos">
          LOGO_ASPNETCORE, LOGO_CSHARP, LOGO_MICROSOFT
        </div>
        <h3>The User Interface:</h3>
        <p>
          The UI of the web site I work with ReactJS. A framework made by
          Facebook, a company known by working with huge and complex
          applications with a large number of users and big amounts of data. The
          React framework breaks a complex UI in reusable components that can be
          worked individually. An approach that helps developers, resulting in a
          better final product.
        </p>
        <div className="logos">
          LOGO_REACT, LOGO_JAVA_SCRIPT, LOGO_HTML, LOGO_CSS
        </div>
        <h3>Education:</h3>
        <p>
          With a superior degree in Information Systems as my formal education.
          I believe that education never ends. So to as part of my routine I'm
          always teaching my self about programming. I try to keep a balance
          between making a getting a better knowlegde about the tecnologies I
          already use, aiming to reach a deeper knowlegde of my work stack, but
          also keep my self updated with what the new tecnologies can offer to
          my day to day work flow. I won't adopt every single piece of new
          technology that encounter, but accept the ones that aggregate value to
          my products.
        </p>
        <h3>Experience:</h3>
        <p>TODO</p>
        <h3>Knowlegde:</h3>
        <p>TODO</p>
        <h3>Goals:</h3>
        <p>TODO</p>
        <h3>Interests:</h3>
        <p>TODO</p>
      </Container>
    </AboutPageStyled>
  </Layout>
)

export default AboutPage
