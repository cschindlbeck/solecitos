import React from "react";
import { styled } from "@mui/system";
import { CardContent, Card, Box, Container, Paper, Typography, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

import SolecitosButton from "../shared/SolecitosButton";
import HeroComponent from "../shared/Hero";

import bilingualImage from "../images/bilingual.jpg";
import healthyImage from "../images/healthy.jpeg";
import movementImage from "../images/movement.jpg";

const Home = () => {

  const titleList = ["Bilingual", "Ernährung", "Bewegung"];
  const bilingualText = `Unsere Fachkräfte arbeiten nach der Immersionsmethode, d.h. dass jede/r Erzieher/in konsequent ihre/seine Sprache spricht  entweder Deutsch oder Spanisch.`;
  const healthText = `Gesunde Ernährung ist uns wichtig, daher beziehen wir unsere Mittagsgerichte von einem regionalen Bio-Caterer`;
  const movementText = `Ausflüge, hausinterner Spielplatz`;
  const contentList = [bilingualText,healthText,movementText ];
  const imageList = [bilingualImage, healthyImage, movementImage];

  return (
    <React.Fragment>
      <HeroComponent />
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 2,
            pt: 4,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          {titleList.map((service, index) => (
          <Card key={index} style={{ maxWidth: 345, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CardMedia
              component="img"
              height="140"
              image={imageList[index]}
              alt={imageList[index]}
            />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography gutterBottom variant="h5" component="div">
                  {titleList[index]}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                  {contentList[index]}
              </Typography>
              <Link to="/about">
                <SolecitosButton> LERNE MEHR </SolecitosButton>
              </Link>
            </CardContent>
          </Card>
          ))}
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Home;
