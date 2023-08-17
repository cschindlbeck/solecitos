import React from "react";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import banner_left from "../images/banner_left.jpg";
import banner_right from "../images/banner_right.jpg";

import { styled } from "@mui/system";
import examplePDF from "../assets/Aufnahmeantrag_01-2023.pdf";
import { FaDownload } from "react-icons/fa";

import SolecitosButton from "../shared/SolecitosButton";
import SolecitosCard from "../shared/SolecitosCard";

const handleDownloadPDF = () => {
  const link = document.createElement("a");
  link.href = examplePDF;
  link.download = "Aufnahmeantrag_Solecitos.pdf";
  link.click();
};

// duplicate from news page
const CenteredDiv = styled("div")`
  display: flex;
  justify-content: center;
  margin-top: 10px; /* Adjust margin as needed */
`;

const CustomTypography = styled(Typography)`
  white-space: pre-line;
  line-height: 1.5;
`;

const text = `
Sie möchten Ihr Kind in unserer Einrichtung anmelden?
Bitte senden Sie uns den ausgefüllten Aufnahmeantrag per E-Mail zu oder geben
ihn persönlich in der Kita während der regulären Öffnungszeiten ab.
`;

const content = (
  <>
    <Box sx={{}}>
      <Typography
        variant="body2"
        color="text.secondary"
        style={{ fontWeight: "bold" }}
      >
        Adresse
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Solecitos e.V.
        <br />
        Lister Kirchweg 69
        <br />
        30163 Hannover
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        style={{ fontWeight: "bold" }}
      >
        Telefon
      </Typography>
      <Typography variant="body2" color="text.secondary">
        0511 300 96 684
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        style={{ fontWeight: "bold" }}
      >
        Bürozeiten
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Montag 08:00 -13:30 / Dienstag 13.30-16.00 / Freitag 08:00 - 14:00 Uhr
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        style={{ fontWeight: "bold" }}
      >
        E-Mail
      </Typography>
      <Typography
        variant="body2"
        component="a"
        href="mailto:anmeldung@solecitos.de"
      >
        leitung@solecitos.de
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        style={{ fontWeight: "bold" }}
      >
        Besichtigungstermine
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Jeder 1. und 3. Freitag im Monat (wir bitten um telefonische Anmeldung)
      </Typography>
    </Box>
  </>
);

const content2 = (
  <>
    <Typography variant="body2" color="text.secondary">
      {text}
    </Typography>
    <Typography
      variant="body2"
      component="a"
      href="mailto:anmeldung@solecitos.de"
    >
      anmeldung@solecitos.de
    </Typography>
    <CenteredDiv>
      <SolecitosButton onClick={handleDownloadPDF} startIcon={<FaDownload />}>
        Aufnahmeantrag
      </SolecitosButton>
    </CenteredDiv>
    <Typography variant="body2" color="text.secondary">
      Die Vergabe der Plätze erfolgt in der Regel im ersten Quartal des Jahres
      für den Kita-Start ab 1.8..
      <br />
      Wenn Sie Fragen zu uns und unserer Einrichtung haben, können Sie uns sehr
      gerne unter 0511 30096684 erreichen.
    </Typography>
  </>
);

const Contact = () => {
  return (
    <Container>
      <Typography variant="h3">Kontakt</Typography>
      <Divider></Divider>
      <Box
        sx={{
          p: 4,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        {/* <Grid container spacing={2}> */}
        {/*   <Grid item xs={6} sm={6} md={6}> */}
        <SolecitosCard
          image={banner_right}
          title={"Kontakt"}
          content={content}
        />
        {/* </Grid> */}
        {/* <Grid item xs={6} sm={6} md={6}> */}
        <SolecitosCard
          image={banner_left}
          title={"Anmeldung"}
          content={content2}
        />
        {/*   </Grid> */}
        {/* </Grid> */}
      </Box>
    </Container>
  );
};

export default Contact;
