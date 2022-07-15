import React from "react";
import styled from "styled-components";


import { Container, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { Card } from "react-bootstrap";


const Resume = (props) => {

  return (
    <AccountStyled>
      <section id="resume">
        <Container>
          <div>
            <h4 className="header">Resume</h4>
          </div>
          
          <iframe src="https://docs.google.com/document/d/1CJLRZJhYOhlza636FmzYmamlDisCgnrp_VEihWGF2u8/edit?usp=sharing" allowFullScreen = "true"  height = "1000px" width = "1000px"/>
        </Container>
      </section>
    </AccountStyled>
  );
};




const AccountStyled = styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
    color:#FF6A3D;
    text-align:center;
    .header{
      font-size:32px;
      margin-bottom:15px;
    }
`;

export default Resume;
