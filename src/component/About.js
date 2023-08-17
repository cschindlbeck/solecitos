import * as React from "react";

import { Box, Container, Divider, Typography } from "@mui/material";

import aboutusImage from "../images/education_small.jpg";
import estrellitasImage from "../images/toddler_small.jpg";
import lunasImage from "../images/kids_small.jpg";
import SolecitosCard from "../shared/SolecitosCard";

const text = `
Der Verein Solecitos e. V. ist eine bilinguale
(deutsch-spanische) Kindertagesstätte in Hannover-List. Er wurde
2008 mit dem Ziel gegründet die frühkindliche Erziehung von
Kindern mit spanischsprachigem Hintergrund zu fördern. Unsere
Fachkräfte arbeiten nach der Immersionsmethode, d.h. dass jede/r
Erzieher/in konsequent ihre/seine Sprache spricht entweder
Deutsch oder Spanisch.
`;

export default function About() {
  return (
    <Container>
      <Typography variant="h3">Über uns</Typography>
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
        <SolecitosCard
          image={aboutusImage}
          title={"Solecitos e.V."}
          content={
            <Typography variant="body2" color="text.secondary">
              {text}
            </Typography>
          }
        />
        <SolecitosCard
          image={estrellitasImage}
          title={"Estrellitas & Lunas"}
          content={
            <Typography variant="body2" color="text.secondary">
              {`"Estrellitas" betreut neugierige 12 Monate bis 3 Jahre alte Kinder in einer liebevollen Umgebung. Unsere einfühlsamen Betreuer fördern erste Entdeckungen und Geborgenheit. In der "Lunas" Gruppe erleben 25 Kinder im Alter von 3 bis 6 Jahren spannende Abenteuer und kreatives Lernen. Unsere engagierten Pädagogen legen hier den Grundstein für lebenslanges Wachstum und Freundschaften. Jedes Kind wird als einzigartiges Licht geschätzt und von unserem herzlichen Team auf seiner Reise unterstützt.`}
            </Typography>
          }
        />
        <SolecitosCard
          image={lunasImage}
          title={"Zusammenspiel"}
          content={
            <Typography variant="body2" color="text.secondary">
              {`Damit die Kinder nicht nur “ihre Gruppe” als Lernort nutzen können, gibt es diverse
Angebote, an denen beiden Gruppen beteiligt sind. Zu diesen gehören wöchentlich
regelmäßig stattfindende offene Gruppen, Projektarbeiten zu gemeinsamen Festen,
gemeinsame Morgenkreise sowie ein gemeinsames kulturelles Frühstück in der Halle.
Die Kinder haben so die Möglichkeit voneinander zu lernen und aufeinander zu
achten.`}
            </Typography>
          }
        />
      </Box>
      <Typography variant="h3">Pädagogischen Highlights</Typography>
      <Divider></Divider>
    </Container>
  );
}
