import * as React from 'react';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

export default function About() {
  return (
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
          rowSpacing={2}
          marginX={'auto'}
          marginY={{ xs: '50px', sm: '100px' }}
          width={{ xs: '100%', sm: '60%' }}
        >
          <Typography fontWeight={'600'} variant="h4">
            About
          </Typography>
          <Grid item width={'100%'} px={'4%'}>
            <Typography variant="body1" gutterBottom>
              Hi I'm Kara! I'm a 4th year student at UC Berkeley
              studying electrical engineering & computer science.
            </Typography>
            <Typography variant="body1" gutterBottom>
              I enjoy learning about + using new technologies and have
              an interest in fullstack development.
            </Typography>
            <Typography variant="body1">
              Lately I've been feeling extra passionate about frontend
              development and creating good UI/UX experiences.
            </Typography>
          </Grid>
          <Grid item width={'100%'} px={'4%'}>
            <Typography variant="body1" gutterBottom>
              Most of my free time is spent doing yoga (vinyasa not
              bikram) and making music.
            </Typography>
            <Typography variant="body1" gutterBottom>
              I played the clarinet for 6 years, but nowadays I like
              to focus on guitar & piano.
            </Typography>
            <Typography variant="body1" gutterBottom>
              I have a youtube channel where I like to post covers and
              original compositions for fun.
            </Typography>
          </Grid>
        </Grid>
      </Fade>
    </Grid>
  );
}
