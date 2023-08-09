import React from "react";
import { Container, Divider, Typography } from "@mui/material";
import SolecitosButton from "../shared/SolecitosButton";
import { FaDownload } from 'react-icons/fa';
import flyerJPG from '../images/basar.jpeg';
import { styled } from "@mui/system";

const handleDownloadPDF = () => {
  const link = document.createElement('a');
  link.href = flyerJPG;
  link.download = 'FlyerBasar2023';
  link.click();
};

const CustomTypography = styled(Typography)`
  white-space: pre-line;
  line-height: 1.5;
`;

const CenteredDiv = styled('div')`
  display: flex;
  justify-content: center;
  margin-top: 10px; /* Adjust margin as needed */
`;

const newsText =`
Die Kindertagestätte Solecitos e.V. lädt jedes Jahr im Herbst und im Frühling zum Verkaufen und Kaufen ein. Wir freuen uns auf Euch!
Nächster Termin: 24.09.23
Öffnungszeiten: 14-16Uhr
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
      <Typography variant="h6" color="secondary.main">Second Hand Basar Herbst 2023</Typography>
      <CustomTypography variant="body2">
        {newsText}
      </CustomTypography>
        <Typography variant="body2" component="a" href="mailto:solecitos.basar@solecitos.de">
          solecitos.basar@solecitos.de
        </Typography>.
      <CenteredDiv>
        <SolecitosButton onClick={handleDownloadPDF} startIcon={<FaDownload />}>
          Flyer downloaden
        </SolecitosButton>
      </CenteredDiv>
      <Divider textAlign="right">13.08.2022</Divider>
      <Typography variant="h6" color="secondary.main">Second Hand Basar Herbst 2022</Typography>
    </Container>
  )
};

export default News;
