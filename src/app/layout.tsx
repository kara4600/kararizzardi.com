import * as React from 'react';
import { Roboto } from 'next/font/google';
import { Metadata } from 'next';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Box from '@mui/material/Box';

const title = 'Kara Rizzardi';
const description = 'Kara Rizzardi - kararizzardi.com';
const image = '/favicon.ico';

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title,
    description,
    images: [image],
  },
  metadataBase: new URL('https://kararizzardi.com'),
};

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Header />
          <ThemeRegistry>{children}</ThemeRegistry>
          <Footer />
        </Box>
      </body>
    </html>
  );
}
