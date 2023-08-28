import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";

import EventCountdown from "../shared/EventCountdown.js";
import SolecitosButton from "../shared/SolecitosButton";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
    // Store a flag in localStorage to indicate that the user has closed the popup.
    localStorage.setItem("popupClosed", "true");
  };

  //Uncomment to only show once
  // useEffect(() => {
  //   // Check if the flag exists in localStorage.
  //   const popupClosed = localStorage.getItem('popupClosed');
  //   if (popupClosed === 'true') {
  //     setShowPopup(false);
  //   }
  // }, []);
  //

  return (
    <Dialog
      open={showPopup}
      onClose={handleClosePopup}
      PaperProps={{
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: "-30vh", // Adjust this value to control the vertical position
        },
      }}
    >
      <DialogTitle disableTypography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" color="secondary.main">
            Second Hand Basar Herbst 2023
          </Typography>
          <IconButton aria-label="close" onClick={handleClosePopup}>
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="body2">
          {`Unser Basar startet in `}
          <EventCountdown targetDate="2023-09-24" />
          {` Tagen.`}
        </Typography>
        <Typography variant="body2">
          {`Kommt vorbei, wir freuen uns auf Euch!`}
        </Typography>
        <Link
          to="/news"
          onClick={handleClosePopup}
          style={{ display: "block", marginTop: "10px" }}
        >
          <SolecitosButton>Mehr Infos hier</SolecitosButton>
        </Link>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
