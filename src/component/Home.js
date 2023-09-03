import React from "react";
import { Link } from "react-router-dom";
import { Grid, Container, Typography } from "@mui/material";

import CardContainer from "../shared/SolecitosCardContainer";
import SolecitosButton from "../shared/SolecitosButton";
import SolecitosCard from "../shared/SolecitosCard";
import HeroComponent from "../shared/Hero";

import bilingualImage from "../images/bilingual_small.jpg";
import healthyImage from "../images/healthy_small.jpg";
import movementImage from "../images/movement_small.jpg";

const bilingualText = `Unsere Fachkräfte arbeiten nach der Immersionsmethode, d.h. dass jede/r Erzieher/in konsequent ihre/seine Sprache spricht  entweder Deutsch oder Spanisch. Die Kinder tauchen dabei in beide Sprachen, Spanisch und Deutsch, ein und lernen diese auf natürliche Weise ganz ohne Sprachunterricht.`;
const healthText = `Gesunde Ernährung ist uns wichtig, daher beziehen wir unsere täglich frisch zubereiteten Mittagessen von einem regionalen Bio-Caterer. Dieser geht im Bedarfsfall auch auf Unverträglichkeiten oder besondere Ernährungsvorstellungen ein.`;
const movementText = `Um die Kinder in ihrer ganzheitlichen Entwicklung zu unterstützen und ihnen die Möglichkeit zu geben, Erfahrungen auch außerhalb der Kita zu sammeln, nutzen wir viele Angebote außerhalb von Solecitos. Dazu gehören z.B. die Waldwoche, Besuche von Spielplätzen, Museen, Schwimmbad sowie Theater und gemeinsame Einkäufe im Stadtteil. Unser hausinterner Spielplatz umfasst rund 450 qm, mit Sandspielbereiche, Rasenflächen, Bobby-Car-Rennstrecke Nestschaukel, Rutsche und Klettergerüste für alle Altersstufen.`;

const Home = () => {
  const imageList = [bilingualImage, healthyImage, movementImage];
  const titleList = ["Bilinguale Immersion", "Ernährung", "Bewegung"];
  const contentList = [bilingualText, healthText, movementText];

  return (
    <React.Fragment>
      <HeroComponent />
      <Container>
        <Grid container spacing={2}>
          {titleList.map((_, index) => (
            <Grid item xs={12} md={4} key={index}>
              <CardContainer>
                <SolecitosCard
                  image={imageList[index]}
                  title={titleList[index]}
                  content={
                    <>
                      <Typography variant="body2" color="text.secondary">
                        {contentList[index]}
                      </Typography>
                      <Link to="/about">
                        <SolecitosButton>LERNE MEHR</SolecitosButton>
                      </Link>
                    </>
                  }
                />
              </CardContainer>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Home;
