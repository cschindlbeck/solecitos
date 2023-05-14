import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({
//   card: {
//     maxWidth: 300,
//     margin: '0 auto',
//     marginBottom: 20,
//   },
//   media: {
//     height: 200,
//   },
// });

const LeaderCard = ({ name, role, imageSrc, bio }) => {
  // const classes = useStyles();

  return (
    <Card >
      <CardMedia image={imageSrc} title={name} />
      <CardContent>
        <Typography variant="h6" component="h2">
          {name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {role}
        </Typography>
        <Typography variant="body2" component="p">
          {bio}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LeaderCard;
