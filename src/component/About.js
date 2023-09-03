import * as React from "react";
import { Container, Divider, Grid, Typography } from "@mui/material";

import aboutusImage from "../images/education_small.jpg";
import estrellitasImage from "../images/toddler_small.jpg";
import lunasImage from "../images/kids_small.jpg";
import SolecitosCard from "../shared/SolecitosCard";
import CardContainer from "../shared/SolecitosCardContainer";

const solecitostext = `
Der Verein Solecitos e. V. ist eine bilinguale
(deutsch-spanische) Kindertagesstätte in Hannover-List. Er wurde
2008 mit dem Ziel gegründet die frühkindliche Erziehung von
Kindern mit spanischsprachigem Hintergrund zu fördern. Unsere
Fachkräfte arbeiten nach der Immersionsmethode, d.h. dass jede/r
Erzieher/in konsequent ihre/seine Sprache spricht entweder
Deutsch oder Spanisch.
`;

const solecitostext2 = `
Die KiTa Solecitos besteht aus einer Krippengruppe "Estrellitas" und
einer Kindergartengruppe "Lunas".
Bei den "Estrellitas" werden neugierige 12 Monate bis 3 Jahre alte Kinder
in einer liebevollen Umgebung betreut.
Unsere einfühlsamen Betreuer fördern erste Entdeckungen
und Geborgenheit. In der "Lunas" Gruppe erleben 25 Kinder im Alter von 3 bis 6
Jahren spannende Abenteuer und kreatives Lernen. Unsere engagierten Pädagogen
legen hier den Grundstein für lebenslanges Wachstum und Freundschaften.
Jedes Kind wird als einzigartiges Individuum geschätzt und von unserem herzlichen
Team auf seiner Reise unterstützt.`;

const solecitostext3 = `Damit die Kinder nicht nur “ihre Gruppe” als Lernortnutzen
nutzen können, gibt es diverse Angebote, an denen beiden Gruppen beteiligt sind.
Zu diesen gehören wöchentlich regelmäßig stattfindende offene Gruppen, Projektarbeiten zu gemeinsamen Festen,
  gemeinsame Morgenkreise sowie ein gemeinsames kulturelles Frühstück in der Halle.
Die Kinder haben so die Möglichkeit voneinander zu lernen und aufeinander zu
achten.`;

const contentList = [solecitostext, solecitostext2, solecitostext3];
const titleList = ["Solecitos e.V.", "Estrellitas & Lunas", "Zusammenspiel"];
const imageList = [aboutusImage, estrellitasImage, lunasImage];

export default function About() {
  return (
    <Container>
      <Typography variant="h3">Über uns</Typography>
      <Divider></Divider>
      <Grid container spacing={2}>
        {titleList.map((service, index) => (
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
                  </>
                }
              />
            </CardContainer>
          </Grid>
        ))}
      </Grid>
      {/* <Typography variant="h3"> Pädagogischen Highlights</Typography> */}
      {/* <Divider></Divider> */}
    </Container>
  );
}
