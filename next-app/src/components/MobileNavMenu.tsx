'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';

const LINKS = [
  { text: 'Home', href: '/', target: '_self' },
  {
    text: 'Resume',
    href: '/Kara_Rizzardi_Resume.pdf',
    target: '_blank',
  },
  {
    text: 'Github',
    href: 'https://github.com/kara4600/',
    target: '_blank',
  },
  { text: 'Projects', href: '/projects', target: '_self' },
];

export default function MobileNavMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(
    null
  );
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
        {LINKS.map(({ text, href, target }, key) => (
          <Link
            href={href}
            target={target}
            color={'inherit'}
            underline="none"
            key={key}
          >
            <MenuItem onClick={handleClose}>{text}</MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
}
