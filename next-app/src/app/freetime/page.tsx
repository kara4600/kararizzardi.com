'use client'
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useEffect, useState } from 'react';

export default function Freetime() {
  const [events, setEvents] = useState<string[]>([]);

  useEffect(() => {
    fetch('/events.txt') // Fetch file from public folder
      .then((response) => response.text())
      .then((text) => {
        const splitLines = text
          .split('\n')
          .map((line) => line.trim())
            .filter((line) => line !== '');
        setEvents(splitLines);
      })
      .catch((error) => console.error('Error fetching file:', error));
  }, []);

  return (
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
          <Typography fontWeight={'600'} variant="h4">
            things i saw
          </Typography>
          <Grid item width={'100%'} px={'4%'}>
            <List
              disablePadding
              sx={{
                listStyleType: 'disc',
              }}
            >
              {events.map((event) => (
                <ListItem
                  disableGutters
                  disablePadding
                  sx={{
                    display: 'list-item',
                    mb: '0.5vh',
                    ml: '1em',
                  }}
                >
                  {event}
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Fade>
    </Grid>
  );
}
