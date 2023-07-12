import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link
        href="/"
        style={{ textDecoration: 'none', color: '#9DBBE9' }}
      >
        Kara Rizzardi
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          ml: '-8px',
          mb: '-8px',
          width: '100%',
          mt: 'auto',
          backgroundColor: '#FAFAF4',
          // #283044
          //   backgroundColor: (theme) =>
          //     theme.palette.mode === 'light'
          //       ? theme.palette.grey[200]
          //       : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="subtitle1"
            fontWeight={'500'}
            color="text.secondary"
          >
            This custom site was built with ❤️ by me. Check out{' '}
            <Link
              href="https://github.com/kara4600/kararizzardi.com"
              target={'_blank'}
              style={{ color: '#9DBBE9' }}
            >
              the source code
            </Link>{' '}
            on GitHub!
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}