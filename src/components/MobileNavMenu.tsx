'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import LaunchIcon from '@mui/icons-material/Launch';

export default function MobileNavMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link color="inherit" underline="none" href={'/'}>
          <MenuItem onClick={handleClose}>Home</MenuItem>
        </Link>
        <Link
          color="inherit"
          underline="none"
          href={'/Kara_Rizzardi_Resume.pdf'}
          target={'_blank'}
        >
          <MenuItem onClick={handleClose}>
            Resume {<LaunchIcon fontSize="small" />}
          </MenuItem>
        </Link>
        <Link
          color="inherit"
          underline="none"
          href={'https://github.com/kara4600/kararizzardi.com'}
          target={'_blank'}
        >
          <MenuItem onClick={handleClose}>
            Github {<LaunchIcon fontSize="small" />}
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
