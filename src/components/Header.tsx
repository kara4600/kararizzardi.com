import Link from 'next/link';
import MobileNavMenu from './MobileNavMenu';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LaunchIcon from '@mui/icons-material/Launch';

export default function Header() {
  return (
    <div>
      <Grid
        container
        item
        sx={{
          display: { xs: 'none', sm: 'flex' },
          mt: '1%',
          mx: 'auto',
          direction: 'row',
          width: '70%',
        }}
      >
        <Link href={'/'} style={{ textDecoration: 'none', color: '#000' }}>
          <Typography variant="h5" fontWeight={550}>
            KRizzardi
          </Typography>
        </Link>
        <Link href={'/'}>
          <Button>Home</Button>
        </Link>
        <Link href={'/Kara_Rizzardi_Resume.pdf'} target="_blank">
          <Button>Resume{<LaunchIcon />}</Button>
        </Link>
        <Link href={'https://github.com/kara4600/'} target="_blank">
          <Button>Github {<LaunchIcon />}</Button>
        </Link>
      </Grid>
      <Grid
        container
        item
        sx={{ display: { xs: 'flex', sm: 'none' }, mt: '3%', direction: 'row' }}
      >
        <MobileNavMenu />
      </Grid>
    </div>
  );
}
