import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import {CardHeader} from "@material-ui/core";
import {CardMedia} from "@material-ui/core";

import snakePic from '../Images/snake.png';
import cyclePic from '../Images/biden.png';
import icampaignPic from '../Images/icampaignus.png';
import colonGen from '../Images/colonoscopygeneral.png';
import jake1 from '../Images/jake1.png';
import jake2 from '../Images/jake2.png';


import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Collapse from '@mui/material/Collapse';

const Portfolio = () => {
  const projects = [{title:"Deep Q learning with Snake",subheader:"Part 1 of Final project of 9 week ai couse from UTD",img:snakePic, content:"Used reinforcement learning with pytorch and tensorflow implementations to learn how to play snake. For more info on my implementation see the first half of my presentation: https://docs.google.com/presentation/d/1-cJ4ZsievrE0vJrasmQdOdnQnkNq50WcT8XYd-sbwlc/edit?usp=sharing"},
                    {title:"Cycle-Gan for person to person translation",subheader:"Part 2 of Final project of 9 week ai couse from UTD",img:cyclePic, content:"Used a tensorflow implementation of a cycle-gan with forward and adversial loss to convert from pictures of me to pictures of President Biden and vice versa. Discrimiator was based on patchGAN. For more info on my implementation see the second half of my presentation: https://docs.google.com/presentation/d/1-cJ4ZsievrE0vJrasmQdOdnQnkNq50WcT8XYd-sbwlc/edit?usp=sharing"},
                    {title:"icampaignus app and website",subheader:"Codeveloped with Rahik Sikder and Sarowar Sikder",img:icampaignPic, content:"Developed a site to allow for networking for individuals who wish to spread messages for their campaigns allowing them to set up an account on the website and then use the app to send the campaign message to other people. The app could also be used to send the messages from people to recieved the messages to others. The full website is at http://icampaignus.org/."},
                    {title:"Colonoscopy Diagnosis AI",subheader:"Training on over 8000 colonoscopy pictures and tested on mine.",img:colonGen, content:"Used a Convolutional neural network with 3 convolution + maxpool2d layers along with batch normalization before flattening and using two dense layers with the last being for outputting to each diagnosis. Achieved a 77% accuracy.", additional: <Container><CardMedia component = "img" image = {jake1} alt = "colon" /><CardMedia component = "img"  image = {jake2} alt = "colon" /></Container>},

                  ];
  


  return (
    <ContentStyled>
      <section id="portfolio">
        <Container className="fullwidth">
              <h4 className="header">Portfolio</h4>
              <Grid
                container
                spacing={2}
                justify="center"
                className="grid"
              >
                {projects.map((project) => {
                  return (
                    <DispCard details = {project}/>
                  );
                })}
              </Grid>
        </Container>
        </section>
      </ContentStyled>
  );
};

const DispCard = (props) => {
  const [expanded,setExpanded] = React.useState(false);
  const details = props.details;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardHeader 
        title = {details.title}
        subheader={details.subheader}/>
        <CardMedia component = "img" height = "200" image = {details.img} alt = "Snake picture" />
        <CardContent>
          {expanded?<ExpandLessIcon onClick={handleExpandClick}/>:<ExpandMoreIcon onClick={handleExpandClick}/>}
        </CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {details.additional}
          <CardContent>
            <p>{details.content}</p>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  )
}
const ContentStyled = styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    color:#FF6A3D;
    .header{
      font-size:32px;
    }
    .fullwidth{
      width:100%;
    }
    .grid{
      width:100%;
      margin-top:50px;
      margin-bottom:50px;
    }
`;

export default Portfolio;
