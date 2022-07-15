import React from "react";
import styled from "styled-components";

import { Container, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Skills = () => {
  let history = useHistory();
  const onSignUpPress = () => {
    history.push("/SignUp");
  };

  return (
    <section id="resume">
      <ContentStyled className="content-section">
        <p>
          Skills
        </p>
      </ContentStyled>
    </section>
  );
};

const ContentStyled = styled.section`
`;

export default Skills;
