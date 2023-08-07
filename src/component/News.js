import React from "react";
import { Container, Divider, Typography } from "@mui/material";
import SolecitosButton from "../shared/SolecitosButton";
import { FaDownload } from 'react-icons/fa';
import flyerJPG from '../images/basar.jpeg';

const handleDownloadPDF = () => {
  const link = document.createElement('a');
  link.href = flyerJPG;
  link.download = 'FlyerBasar2023';
  link.click();
};

const News = () => {
  return (
    <Container>
      <Typography variant="h3">Neuigkeiten</Typography>
      <Divider textAlign="right">24.09.2023</Divider>
      <Typography variant="h6" color="secondary.main">Second Hand Basar Herbst 2023</Typography>
      <Typography variant="body2">
        Die Kindertagestätte Solecitos e.V. lädt jedes Jahr im Herbst und im Frühling zum Verkaufen und Kaufen ein.
        Wir freuen uns auf Euch!<br />
        Nächster Termin: 24.09.23<br />
        Öffnungszeiten: 14-16Uhr<br />
        Kinderbekleidung, Spielzeug, Bücher, Kinderfahrzeuge, etc.<br />
        Kaffee und Kuchen auch zum Mitnehmen!<br />
        Tische und Sitzgelegenheit für den eigenen Stand sind mitzubringen.<br />
        Stellplatz Reservierung (Standgebühr: 8 € für lfd. Meter + 1 Kuchen/Waffelteig) unter:<br />
        <Typography variant="body2" component="a" href="mailto:solecitos.basar@solecitos.de">
          solecitos.basar@solecitos.de
        </Typography>.<br />
        <SolecitosButton onClick={handleDownloadPDF} startIcon={<FaDownload />}>
          Flyer downloaden
        </SolecitosButton>
      </Typography>
      <Divider textAlign="right">13.08.2022</Divider>
      <Typography variant="h6" color="secondary.main">Second Hand Basar Herbst 2022</Typography>
    </Container>
  )
};

export default News;
