import React from "react";
import { Card, Container, Grid } from "@mui/material";

const Impressum = () => {
  return (
    <React.Fragment>
      <Container>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={8}>
            <Card style={{ maxWidth: 600 }}>
              blabal
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card style={{ maxWidth: 345 }}>
              blabal
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card style={{ maxWidth: 345 }}>
              blabal
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Impressum;
