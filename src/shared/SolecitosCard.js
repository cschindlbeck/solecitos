import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function SolecitosCard({ image, title, content }) {
  return (
    <Card
      style={{
        width: "100%",
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
