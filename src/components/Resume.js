import React from "react";
import styled from "styled-components";


import { Container, Row,Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { Card } from "react-bootstrap";


const Resume = (props) => {

  return (
    <AccountStyled>
      <section id="resume">
        <Container fluid className="p-0" >
              <h4 className="header">Resume</h4>
              <iframe src="https://docs.google.com/document/d/1CJLRZJhYOhlza636FmzYmamlDisCgnrp_VEihWGF2u8/edit?usp=sharing" allowFullScreen = "true" height = "1000" className="screen"/>            
          
          
        </Container>
      </section>
    </AccountStyled>
  );
};




const AccountStyled = styled.section`
    justify-content:center;
    align-items:center;

    color:#FF6A3D;
    text-align:center;
    .header{
      font-size:32px;
      margin-bottom:15px;
      width:100%;
    }
    .full{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      padding:0;
      margin:0;
      margin-right:0;
      
    }
    .screen{
      width:75%;
    }
`;

export default Resume;