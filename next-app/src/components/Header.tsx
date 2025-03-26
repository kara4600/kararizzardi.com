import Link from 'next/link';
import MobileNavMenu from './MobileNavMenu';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const LINKS = [
  { text: 'Home', href: '/', target: '_self' },
  { text: 'Projects', href: '/projects', target: '_self' },
  {
    text: 'Resume',
    href: '/Kara_Rizzardi_Resume.pdf',
    target: '_blank',
  },
  {
    text: 'Linkedin',
    href: 'https://www.linkedin.com/in/kararizzardi/',
    target: '_blank',
  },
  {
    text: 'Github',
    href: 'https://github.com/kara4600/',
    target: '_blank',
  },
];

export default function Header() {
  return (
    <div>
      <Grid
        container
        item
        columnSpacing={1.5}
        sx={{
          display: { xs: 'none', sm: 'flex' },
          mt: '1%',
          mx: 'auto',
          direction: 'row',
          width: '70%',
        }}
      >
        <Grid item>
          <Link href={'/'} style={{ textDecoration: 'none', color: '#f5a4f5' }}>
            <Typography variant="h5" fontWeight={550}>
              Kara Rizzardi
            </Typography>
          </Link>
        </Grid>
        {LINKS.map(({ text, href, target }, key) => (
          <Grid item>
            <Link href={href} target={target} key={key}>
              <Button
                sx={{
                  color: '#ffffff', // White text color
                  transition: 'opacity 0.3s, background-color 0.3s',
                  '&:hover': {
                    backgroundColor: '#d687d6',
                    opacity: 1,
                  },
                }}
              >
                {text}
              </Button>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        item
        sx={{
          display: { xs: 'flex', sm: 'none' },
          mt: '3%',
          direction: 'row',
        }}
      >
        <MobileNavMenu />
        <Grid item sx={{ ml: 'auto', mr: '4vw', my: 'auto' }}>
          <Link href={'/'} style={{ textDecoration: 'none', color: '#000' }}>
            <Typography variant="h5" fontWeight={550}>
              Kara Rizzardi
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
