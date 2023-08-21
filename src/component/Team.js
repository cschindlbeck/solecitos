import * as React from "react";
import { Box, Container, Divider, Typography } from "@mui/material";
import { styled } from "@mui/system";

import annaImage from "../images/anna.jpeg";
import belenImage from "../images/belen.jpeg";
import juliaImage from "../images/julia.jpeg";
import StaffCard from "../shared/StaffCard.js";

const StaffSectionContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${(props) => props.theme.spacing(4)};
  padding: ${(props) => props.theme.spacing(4)};
`;

export default function Team() {
  return (
    <React.Fragment>
      <Container>
        <Typography variant="h3">Team</Typography>
        <Divider></Divider>
        <StaffSectionContainer>
          <StaffCard
            imageSrc={annaImage}
            name="Marie"
            position="Vorsitzende"
            test="Marie ist ein begeisterte Erzieherin, die mit ihrem musikalischen Talent
            strahlt. Als leidenschaftliche Salsa-Tänzerin bringt sie temperamentvolle Rhythmen in den Kindergartenalltag.
            Dabei lehrt sie Kinder spielerisch spanische Lieder und Tänze, welche die Freude und Gemeinschaft fördern.
            Ihre Energie verleiht dem Team eine einzigartige Dynamik.
            "
          />
          <StaffCard
            imageSrc={belenImage}
            name="Belén"
            position="Erzieherin"
            test="
            Belén ist die einfühlsame Erzieherin mit lateinamerikanischen Wurzeln, welche den den Kindern kulturelle Vielfalt vermittelt.
            Sie singt fröhliche Lieder auf Spanisch und motiviert die Kleinen zu kreativem Spiel.
            Beléns Hingabe zur Bildung und ihr herzliches Wesen machen sie zu einem wichtigen Teil des Teams, das die Kinder in einer liebevollen Umgebung fördert.
            "
          />
          <StaffCard
            imageSrc={juliaImage}
            name="Julia"
            position="Erzieherin"
            test="Julia eine wichtige Säule des Teams. Ihre spanischen Wurzeln und ihre einfühlsame Natur schaffen eine Atmosphäre des Vertrauens.
            Mit kreativen Bastelideen und liebevoller Betreuung unterstützt Ana die kindliche Entwicklung.
            Ihr kultureller Hintergrund bereichert die Vielfalt im Kindergarten und fördert ein offenes Miteinander."
          />
        </StaffSectionContainer>
      </Container>
    </React.Fragment>
  );
}
