import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import backgroundImage from "../images/kids.jpg";

import SolecitosButton from "../shared/SolecitosButton";

const containerStyle = {
  backgroundImage: "url(" + backgroundImage + ")",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 300,
  width: "100%",
};

const overlayStyle = {
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(255, 255, 255, 0.4)",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
};

const HeroComponent = () => {
  return (
    <Box style={containerStyle}>
      <Box style={overlayStyle}>
        <Typography
          variant="h1"
          sx={{
            textShadow: "1px 0.5px 0px rgba(0, 0, 0, 1)",
            textAlign: "center",
            color: "primary.main",
          }}
        >
          Willkommen bei den Solecitos!
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            color: "primary.contrastText",
          }}
        >
          Die deutsch/spanische Kindertagesstätte
        </Typography>
        <Link to="/contact">
          <Box mt={4}>
            <SolecitosButton>Zur Anmeldung</SolecitosButton>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default HeroComponent;
