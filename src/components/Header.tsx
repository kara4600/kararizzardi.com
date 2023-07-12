import Link from 'next/link';
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
          <Typography variant="h5" fontWeight={550}>
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
  );
}
