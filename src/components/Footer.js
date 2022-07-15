import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <FooterStyle>
      <Container className="footer">
        <Row className="down">
            <Col>
              <div >Jake Chacko</div>
            </Col>
            <Col>
              <div> <EmailIcon/>&nbsp; &nbsp;chackoj1204@gmail.com</div>
            </Col>
            <Col>
              <div> <PhoneIcon/> &nbsp; &nbsp;469-996-2286 </div>
            </Col>
        </Row>
      </Container>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  background-color:white;
  .footer{
    height:200px;
  }
  .down{
    display:flex;
    position:relative;
    top:33%;
    justify-content:center;
    align-items:center;
  }
`;

export default Footer;
