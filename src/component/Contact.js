import React from "react";
import { Grid, CardContent, Card, CardMedia, Typography } from "@mui/material";
import banner from "../images/banner.jpg";

import examplePDF from '../assets/Aufnahmeantrag_01-2023.pdf';
import { FaDownload } from 'react-icons/fa';
import SolecitosButton from "../shared/SolecitosButton";


const handleDownloadPDF = () => {
  const link = document.createElement('a');
  link.href = examplePDF;
  link.download = 'Aufnahmeantrag_Solecitos.pdf';
  link.click();
};

const Contact = () => {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item sx={6}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={banner}
            alt="estrellitas"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Kontakt
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Solecitos e.V.<br />
              Lister Kirchweg 69<br />
              30163 Hannover
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sx={6}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={banner}
            alt="estrellitas"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Anmeldung
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sie möchten Ihr Kind in unserer Einrichtung anmelden? <br />
              Bitte senden Sie uns den ausgefüllten Aufnahmeantrag per E-Mail zu oder geben
              ihn persönlich in der Kita während der regulären Öffnungszeiten ab.
            </Typography>
            <SolecitosButton onClick={handleDownloadPDF} startIcon={<FaDownload />}>
              Aufnahmeantrag
            </SolecitosButton>
            <Typography variant="body2" color="text.secondary">
              Die Vergabe der Plätze erfolgt in der Regel im ersten Quartal des Jahres für den Kita-Start ab 1.8..<br />
              Wenn Sie Fragen zu uns und unserer Einrichtung haben, können Sie uns sehr gerne unter 0511 30096684 erreichen.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Contact;
