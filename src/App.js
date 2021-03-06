import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import AboutUs from "./components/AboutUs";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";


const App = () => {
  
  return (
    <ContentStyled>
      <Header/>
      <AboutUs/>
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
