import { styled } from "@mui/system";
import { Button } from "@mui/material";

const SolecitosButton = styled(Button)`
  color: ${(props) => props.theme.palette.secondary.contrastText};
  background-color: ${(props) => props.theme.palette.secondary.main};
  position: relative;
  overflow: hidden;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  display: inline-flex; /* Use inline-flex display */
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.theme.spacing(1)};
`;

export default SolecitosButton;
