import { styled } from "@mui/system";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";

const TextContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  }
`;

const StaffImage = styled(CardMedia)`
  width: 175px;
  height: 175px;
  border-radius: 50%;
  object-fit: cover;
`;

const StaffCardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  padding: ${(props) => props.theme.spacing(2)};

  @media (max-width: 960px) {
    width: 100%; /* Adjust the width for mobile devices */
  }
`;

const StaffCard = ({ imageSrc, name, position, text }) => {
  return (
    <StaffCardContainer>
      <StaffImage component="img" src={imageSrc} alt={name} />
      <TextContainer>
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            {name}
          </Typography>
          <Typography variant="body1" color="secondary.main" gutterBottom>
            {position}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {text}
          </Typography>
        </CardContent>
      </TextContainer>
    </StaffCardContainer>
  );
};

export default StaffCard;
