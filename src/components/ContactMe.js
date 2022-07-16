import React from "react";
import styled from "styled-components";
import TextareaAutosize from "@mui/base/TextareaAutosize";

// import Chart from "./Chart";
import { Container, Button, Form, Row, Spinner } from "react-bootstrap";

const ContactMe = ({username, campaigns, updateCampaign, deleteCampaign }) => {

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => {alert("Message sent!");})
      .catch((error) => alert(error));
  }


  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };
  const handleNameInput = (event) => {
    setName(event.target.value);
  };
  const handleMessageInput = (event) => {
    setMessage(event.target.value);
  };

  return (
    <section id="contact">
      <ContentStyled className="content-section">
          <Form className="container" netlify>
            <Row className="mb-3">
              <h2 className="header">
                Contact Me
                &nbsp;
              </h2>
            </Row>

            <Form.Group className="mb-3" controlId="name">
              <Form.Label className="label">Name &nbsp;</Form.Label>
              <Form.Control
                className="input"
                placeholder="Name"
                value={name}
                onChange={handleNameInput}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="registerEmail">
              <Form.Label className="label">Email &nbsp; </Form.Label>
              <Form.Control
                className="input"
                placeholder="email@example.com"
                type="email"
                value={email}
                onChange={handleEmailInput}
              ></Form.Control>
            </Form.Group>

            

            <Form.Group className="mb-3" controlId="message">
              <Form.Label className="label">Message</Form.Label>
              <TextareaAutosize
                id="message"
                type="text"
                className="mb-3 input"
                value={message}
                placeholder="message"
                onChange={handleMessageInput}
                minRows={3}
              ></TextareaAutosize>
            </Form.Group>

            <Button onClick={handleSubmit} className="mb-3">
              Submit
            </Button>

          </Form>
      </ContentStyled>
    </section>
  );
};

const ContentStyled = styled.section`
  display:flex;
  justify-content:center;
  align-items:center;
  text-align:center;
  .header{
    color:#9DAAF2;
    font-family: "Poppins", sans-serif;
    font-size:40px;
    margin-top:20px;
  }
  .label{
    color:black;
    width:100%;
    font-size:20px;
    font-family: "Poppins", sans-serif;
  }
  .input{
    width:100%;
    margin:auto;
    vertical-align: middle; 
    border-radius:10px;
    height:75%;
  }
  .container{
    width:100%;
    margin-top:100px;
    margin-bottom:100px;
    padding-bottom:20px;
    background-color:white;
    border-radius:50px;
  }
`;

export default ContactMe;
