import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

import SolecitosButton from "../shared/SolecitosButton";
import HeroComponent from "../shared/Hero";

import bilingualImage from "../images/bilingual_small.jpg";
import healthyImage from "../images/healthy_small.jpg";
import movementImage from "../images/movement_small.jpg";

const titleList = ["Bilinguale Immersion", "Ernährung", "Bewegung"];

const bilingualText = `Unsere Fachkräfte arbeiten nach der Immersionsmethode, d.h. dass jede/r Erzieher/in konsequent
ihre/seine Sprache spricht  entweder Deutsch oder Spanisch. Die Kinder tauchen dabei in beide Sprachen, Spanisch und
Deutsch, ein und lernen diese auf natürliche Weise ganz ohne Sprachunterricht.
`;

const healthText = `Gesunde Ernährung ist uns wichtig, daher beziehen wir unsere täglich frisch zubereiteten
Mittagessen von einem regionalen Bio-Caterer. Dieser geht im Bedarfsfall auch auf Unverträglichkeiten oder besondere
Ernährungsvorstellungen ein.
`;

const movementText = `Um die Kinder in ihrer ganzheitlichen Entwicklung zu unterstützen und ihnen die Möglichkeit zu geben,
Erfahrungen auch außerhalb der Kita zu sammeln, nutzen wir viele Angebote außerhalb von Solecitos. Dazu gehören
z.B. die Waldwoche, Besuche von Spielplätzen, Museen, Schwimmbad sowie Theater und gemeinsame Einkäufe im Stadtteil.
Unser hausinterner Spielplatz umfasst rund 450 qm, mit Sandspielbereiche, Rasenflächen,
Bobby-Car-Rennstrecke Nestschaukel, Rutsche und Klettergerüste für alle Altersstufen.
`;

const Home = () => {
  const contentList = [bilingualText, healthText, movementText];
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
            <Card
              key={index}
              style={{
                maxWidth: 345,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={imageList[index]}
                alt={imageList[index]}
              />
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
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
