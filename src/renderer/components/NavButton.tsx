import * as React from 'react';

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function NavButton({
  to,
  navLabel,
}: {
  to: string;
  navLabel: string;
}): JSX.Element {
  return (
   <div>
      <Button component={Link} to={to} variant="contained" color="primary">
        {navLabel}
      </Button>
   </div>

  );
}