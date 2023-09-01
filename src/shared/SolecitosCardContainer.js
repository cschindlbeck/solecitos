import { styled } from "@mui/system";
import { Box } from "@mui/material";

const CardContainer = styled(Box)`
  padding: 16px; // Adjust the padding as needed
  box-sizing: border-box;
  width: 100%; // This will make each card occupy 100% of the grid item
  display: flex; // Use flexbox
  align-items: stretch; // Stretch items to the same height
`;

export default CardContainer;
