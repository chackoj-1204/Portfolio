import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import AboutUs from "./components/AboutUs";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Lottie from "react-lottie";
import * as location from "./79794-world-locations.json";

const App = () => {
  
  return (
    <ContentStyled>
      <Header/>
      <AboutUs/>
      <Skills/>
      <Portfolio/>
      <Resume/>
      <ContactMe/>
      <Footer/>
    </ContentStyled>


  );
};

const ContentStyled = styled.section`
  position: relative;
  background: #1A2238;

  @media screen and (max-width: 768px) {
    height: initial;
    padding-bottom: 70px;
    padding-top: 160px;
    .content-text {
      flex-direction: column;
    }
  }
`;
export default App;
