import React from "react";
import styled from "styled-components";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  Container,
  Button,
  Navbar,
  Nav
} from "react-bootstrap";

const Header = ({ noLoginButton, logOut, haveIcon = true, username }) => {
  return (
    <HeaderStyle>
      <Navbar className = "fullwidth navbar-custom" fixed = "top" expand = "lg" variant="dark">
        <Container className="fullwidth">
          <Navbar.Brand href="#about">
            <Nav.Link className="logo" href="/">
              Jake Chacko
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="fullwidth" id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about" className = "links">About Me</Nav.Link>
              <Nav.Link href="#portfolio" className = "links">Portfolio</Nav.Link>
              <Nav.Link href="#resume" className = "links">Resume</Nav.Link>
            </Nav>
            <Nav className="right">
              <Nav.Link href="#contact" className = "links">Contact Me &nbsp; &nbsp;<ArrowForwardIcon/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>

            
          
          {/* <ToggleMode/> */}
        
      </Navbar>
    </HeaderStyle>
  );
};



const HeaderStyle = styled.header`
  .fullwidth{
    width:100%;
    margin:0;
    padding:0;
  }
  .logo{
    color:#FF6A3D;
    font-size:35px;
    text-decoration: underline;
    text-decoration-color: #F4DB7D;
    text-decoration-style: wavy;

  }
  .links{
    color:white !important;
    font-size: 25px;
  }
  .navbar-custom{
    display:flex;
    justify-content:space-between;
    background-color:#1A2238;
  }
  .right{
    right:0;
  }

`;

export default Header;
