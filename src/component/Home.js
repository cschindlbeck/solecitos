import React from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import SolecitosButton from "../shared/SolecitosButton";
import HeroComponent from "../shared/Hero";

const serviceList = ["Bilingual", "Ernährung", "Bewegung"];
const serviceList2 = [
  "Unsere Fachkräfte arbeiten nach der Immersionsmethode, d.h. dass jede/r Erzieher/in konsequent ihre/seine Sprache spricht  entweder Deutsch oder Spanisch.",
  "Gesunde Ernährung ist uns wichtig, daher beziehen wir unsere Mittagsgerichte von einem regionalen Bio-Caterer",
  "Ausflüge, hausinterner Spielplatz",
];

const Home = () => {
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
          {serviceList.map((service, index) => (
            <Paper elevation={3}>
              <Box sx={{ m: 2 }}>
                <Typography
                  gutterBottom
                  sx={{ textAlign: "center" }}
                  variant="h5"
                  component="div"
                >
                  {service}{" "}
                </Typography>{" "}
                <Typography
                  sx={{ mt: 2 }}
                  variant="body1"
                  color="text.secondary"
                >
                  {serviceList2[index]}{" "}
                </Typography>{" "}
                <Box sx={{ textAlign: "center" }}>
                  <Link to="/about">
                    <SolecitosButton> LERNE MEHR </SolecitosButton>{" "}
                  </Link>{" "}
                </Box>{" "}
              </Box>{" "}
            </Paper>
          ))}{" "}
        </Box>{" "}
      </Container>{" "}
    </React.Fragment>
  );
};

export default Home;
