import { Typography } from "@mui/material";

const SolecitosLink = ({ email }) => {
  return (
    <div>
      <Typography variant="body2" component="a" href={`mailto:${email}`}>
        {email}
      </Typography>
    </div>
  );
};

export default SolecitosLink;
