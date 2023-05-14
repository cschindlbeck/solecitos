import { styled } from "@mui/system";
import { Button } from "@mui/material";

const SolecitosButton = styled(Button)`
  color: ${(props) => props.theme.palette.secondary.contrastText};
  background-color: ${(props) => props.theme.palette.secondary.main};
  position: relative;
  overflow: hidden;
`;

export default SolecitosButton;
