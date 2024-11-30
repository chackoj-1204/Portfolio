import React from "react";
import styled from "styled-components";


import { Container, Row,Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { Card } from "react-bootstrap";


const Resume = (props) => {

  return (
    <AccountStyled>
      <section  id="resume" className="pt-5">
        <Container fluid className="pt-5 px-0" >
              <h4 className="header">Resume</h4>
              <iframe src="https://docs.google.com/document/d/1-Sv7QHn9wgGqUDEYCoMhAlyWcWN1g94Q/edit?usp=sharing&ouid=101121697690058227083&rtpof=true&sd=true" allowFullScreen = "true" height = "1000" className="screen"/>
          
          
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