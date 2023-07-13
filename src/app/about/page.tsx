import * as React from 'react';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function About() {
  return (
    <div>
      <Grid container direction={'column'} width={'70%'} marginX={'auto'}>
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
            <Typography fontWeight={'600'} variant="h4" mb={'3%'}>
              About
            </Typography>
            <Typography variant="body1">
              Hi I'm Kara! I'm a 4th year student at UC Berkeley studying
              electrical engineering & computer science.
              <Box my={'3px'}></Box>I enjoy learning about + using new
              technologies and have an interest in fullstack development.
              <Box my={'3px'}></Box>
              Lately I've been feeling extra passionate about frontend
              development and creating good UI/UX experiences.
            </Typography>

            <Grid item width={'100%'}>
              <Typography fontWeight={'600'} variant="h4" mb={'1%'}>
                Education
              </Typography>
            </Grid>

            <Grid item width={'100%'}>
              <Typography fontWeight={'600'} variant="h4" mb={'1%'}>
                Work Experience
              </Typography>
            </Grid>

            <Grid item width={'100%'}>
              <Typography fontWeight={'600'} variant="h4" mb={'1%'}>
                Hobbies
              </Typography>
            </Grid>
          </Grid>
        </Fade>
      </Grid>
    </div>
  );
}
