import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const AboutUs = () => {
  return (
    <ContentStyled>
      <section id="about">
        <Container className="container">
            <h4 className="about_text">Hi I'm Jake</h4>
            <p className="about_text">Student aspiring to be a software/machine learning engineer</p>
        </Container>
        </section>
      </ContentStyled>
  );
};

const ContentStyled = styled.section`
    .about_text{
      color:#9DAAF2;
      left:20%;
      font-family:Franklin Gothic Medium;
      font-size:40px;
    }
    .container{
      padding-top: 300px;
      padding-bottom: 500px;
      margin-left: 10px;
    }
`;

export default AboutUs;
