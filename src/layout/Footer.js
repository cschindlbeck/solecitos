import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import { styled } from "@mui/system";

// Background created with https://app.haikei.app/
// with colors ff8400 and fdba72
import backgroundImage from "../images/layered-waves-haikei.svg";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;

const containerStyle = {
  backgroundImage: "url(" + backgroundImage + ")",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "right center",
  display: "flex",
  justifyContent: "flex-end",
  height: 300,
  width: "100%",
};

const Footer = () => {
  return (
    <>
      <Box style={containerStyle} />
      <Box
        sx={{
          backgroundColor: "secondary.main",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          boxShadow: 0,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="body1" pb={1}>
                Adresse
              </Typography>
              <Typography variant="body2">
                Solecitos e.V.
                <br />
                Lister Kirchweg 69
                <br />
                30163 Hannover
                <br />
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="body1" pb={1}>
                Öffnungszeiten
              </Typography>
              <Typography variant="body2">
                Montag bis Freitag
                <br />
                08:00 - 16:00 Uhr
                <br />
                außer an Feiertagen
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="body1" pb={1}>
                Kontakt
              </Typography>
              <Typography
                variant="body2"
                component="a"
                href="mailto:vorstand@solecitos.de"
              >
                vorstand@solecitos.de
              </Typography>
              <Typography variant="body2">0511/30096684</Typography>
            </Grid>
          </Grid>
          <Grid container direction="column" alignItems="center">
            <Grid item xs={12} pt={2}>
              <Typography variant="body2">
                {`Copyright ${new Date().getFullYear()} Solecitos | `}
                <StyledLink to="/impressum">Impressum</StyledLink>
                {" | "}
                <StyledLink to="/datenschutz">Datenschutz</StyledLink>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
