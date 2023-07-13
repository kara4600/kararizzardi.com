import * as React from 'react';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <Grid
        container
        direction={'column'}
        width={'70%'}
        marginX={'auto'}
      >
        <Fade in timeout={1750}>
          <Grid
            container
            item
            justifyContent={'center'}
            marginX={'auto'}
            marginY={{ xs: '50px', sm: '100px' }}
            width={{ xs: '100%', sm: '60%' }}
          >
            <Typography fontWeight={'600'} variant="h4">
              Hello, I'm Kara Rizzardi. <br /> I'm an electrical
              engineering & computer science major at UC Berkeley.{' '}
              <Link
                href={'https://youtu.be/mfebpLfAt8g?t=2'}
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                <Typography
                  fontWeight={'600'}
                  variant="h6"
                  sx={{
                    color: '#2196f3',
                    '&:hover': {
                      color: '#3B7EA1',
                      textDecoration: 'underline',
                    },
                    display: 'inline-block',
                  }}
                >
                  <sup>(go bears!)</sup>
                </Typography>
              </Link>
            </Typography>
          </Grid>
        </Fade>
      </Grid>
    </div>
  );
}
