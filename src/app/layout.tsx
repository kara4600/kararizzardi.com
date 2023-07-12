import * as React from 'react';
import { Roboto } from 'next/font/google';
import { Metadata } from 'next';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const title = 'Krizzardi';
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
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <ThemeRegistry>{children}</ThemeRegistry>
        <Footer />
      </body>
    </html>
  );
}
