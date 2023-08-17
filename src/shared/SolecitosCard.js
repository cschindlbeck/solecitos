import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";

function SolecitosCard({ image, title, content }) {
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const maxWidth = isMediumScreen ? "100%" : "50%";
  return (
    <Card
      style={{
        maxWidth: maxWidth,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CardMedia component="img" height="140" image={image} alt={image} />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {content}
      </CardContent>
    </Card>
  );
}

export default SolecitosCard;
