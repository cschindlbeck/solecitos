import * as React from "react";

import { CardContent, Card, Grid, CardMedia, Typography } from "@mui/material";

import estrellitasImage from "../images/toddler.jpg";
import lunasImage from "../images/kids.jpeg";
import aboutusImage from "../images/aboutus.jpeg";

export default function About() {
  return (
    <React.Fragment>
      <Grid container justifyContent="center">
        <Grid item>
          <Card
            style={{ maxWidth: 690, marginTop: "20px", marginBottom: "20px" }}
          >
            <CardMedia
              component="img"
              height="140"
              image={aboutusImage}
              alt="ueberuns"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Solecitos e.V.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Der Verein Solecitos e. V. ist eine bilinguale
                (deutsch-spanische) Kindertagesstätte in Hannover-List. Er wurde
                2008 mit dem Ziel gegründet die frühkindliche Erziehung von
                Kindern mit spanischsprachigem Hintergrund zu fördern. Unsere
                Fachkräfte arbeiten nach der Immersionsmethode, d.h. dass jede/r
                Erzieher/in konsequent ihre/seine Sprache spricht entweder
                Deutsch oder Spanisch.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sx={6}>
          <Card style={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={estrellitasImage}
              alt="estrellitas"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Estrellitas
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Krippengruppe mit 15 Kinder im Alter von 12 Monaten bis 3
                Jahren.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sx={6}>
          <Card style={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={lunasImage}
              alt="lunas"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lunas
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Kindergartengruppe mit 25 Kindern zwischen 3 und 6 Jahren.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
