import * as React from 'react';

import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

export default function ActionAreaCard({
  imageUrl,
  to,
  cardLabel,
}: {
  imageUrl: any;
  to: string;
  cardLabel: string;
}): JSX.Element {
  return (
    <Card>
      <CardActionArea>
        <Link to={to}>
          <CardMedia component="img" src={imageUrl} width={0} height={70} />
        </Link>
        <CardContent>
          <Typography variant="h5" component="div">
            {cardLabel}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
