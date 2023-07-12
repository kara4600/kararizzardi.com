import * as React from 'react';
import { Roboto } from 'next/font/google';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import LaunchIcon from '@mui/icons-material/Launch';
import Head from 'next/head';
import { Typography } from '@mui/material';

export const metadata = {
  title: 'KRizzardi',
  description: 'kararizzardi.com',
};

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

const DRAWER_WIDTH = 240;

const LINKS = [{ text: 'Home', href: '/', icon: HomeIcon }];

const PLACEHOLDER_LINKS = [{ text: 'Logout', icon: LogoutIcon }];

export default function RootLayout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={metadata.description} />
        <meta name="og:title" content={metadata.title} />
      </Head>

      <body className={roboto.className}>
        <ThemeRegistry>
          <div>
            <Grid
              container
              item
              sx={{ display: { xs: 'none', sm: 'flex' } }}
              direction={'row'}
              width={'70%'}
              marginX={'auto'}
              mt={'1%'}
            >
              <Link
                href={'/'}
                style={{ textDecoration: 'none', color: '#000' }}
              >
                <Typography variant="h5" fontWeight={550} mr={'1%'}>
                  KRizzardi
                </Typography>
              </Link>
              <Link href={'/'}>
                <Button>Home</Button>
              </Link>
              <Button>Resume{<LaunchIcon />}</Button>
              <Link href={'https://github.com/kara4600/'}>
                <Button>Github {<LaunchIcon />}</Button>
              </Link>
            </Grid>
          </div>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
