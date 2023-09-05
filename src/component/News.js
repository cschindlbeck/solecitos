import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { FaDownload } from "react-icons/fa";

import SolecitosButton from "../shared/SolecitosButton";
import flyerJPG from "../images/basar.jpeg";

const handleDownloadPDF = () => {
  const link = document.createElement("a");
  link.href = flyerJPG;
  link.download = "FlyerBasar2023";
  link.click();
};

const CustomTypography = styled(Typography)`
  white-space: pre-line;
  line-height: 2;
`;

const CenteredDiv = styled("div")`
  display: flex;
  justify-content: center;
`;

const newsText = `
Die Kindertagestätte Solecitos e.V. lädt jedes Jahr im Herbst und im Frühling zum Verkaufen und Kaufen ein. Wir freuen uns auf Euch!
Nächster Termin: 24.09.23
Öffnungszeiten: 14:00-16:00 Uhr
Kinderbekleidung, Spielzeug, Bücher, Kinderfahrzeuge, etc.
Kaffee und Kuchen auch zum Mitnehmen!
Tische und Sitzgelegenheit für den eigenen Stand sind mitzubringen.
Stellplatz Reservierung (Standgebühr: 8 € für lfd. Meter + 1 Kuchen/Waffelteig) unter:
`;

const News = () => {
  return (
    <Container>
      <Typography variant="h3">Neuigkeiten</Typography>
      <Divider textAlign="right">24.09.2023</Divider>
      <Box mt={4}>
        <Card
          style={{
            maxWidth: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h6" color="secondary.main">
                  Second Hand Basar Herbst 2023
                </Typography>
                <>
                  <CustomTypography variant="body2">
                    {newsText}
                  </CustomTypography>
                  <Typography
                    variant="body2"
                    component="a"
                    href="mailto:solecitos.basar@solecitos.de"
                  >
                    solecitos.basar@solecitos.de
                  </Typography>
                  <CenteredDiv>
                    <SolecitosButton
                      onClick={handleDownloadPDF}
                      startIcon={<FaDownload />}
                    >
                      Flyer downloaden
                    </SolecitosButton>
                  </CenteredDiv>
                </>
              </CardContent>
            </Grid>
            <Grid item xs={12} md={4}>
              <CardMedia
                component="img"
                style={{ width: "100%", height: "100%" }}
                image={flyerJPG}
                alt={flyerJPG}
              />
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Container>
  );
};

export default News;
