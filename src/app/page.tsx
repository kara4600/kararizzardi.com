import * as React from 'react';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

export default function HomePage() {
  return (
    <div>
      <Grid
        container
        direction={'column'}
        width={'70%'}
        marginX={'auto'}
        mt={'1%'}
      >
        <Fade in timeout={2000}>
          <Grid
            container
            item
            justifyContent={'center'}
            marginX={'auto'}
            marginY={{ xs: '50px', sm: '100px' }}
            width={{ xs: '100%', sm: '60%' }}
          >
            <Typography fontWeight={'600'} variant="h4">
              Hello, I'm Kara Rizzardi. I'm an electrical engineering & computer
              science major at UC Berkeley.
            </Typography>
          </Grid>
        </Fade>
      </Grid>
    </div>
  );
}