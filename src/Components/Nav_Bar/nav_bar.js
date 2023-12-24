import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  styled,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import React, {useState} from 'react';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Nav_bar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
  });

  const Search = styled('div')(({theme}) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%',
    color: 'text.primary',
  }));

  const Icons = styled(Box)(({theme}) => ({
    display: 'none',
    alignItems: 'center',
    gap: '20px',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  }));

  const UserBox = styled(Box)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  }));

  const [open, setOpen] = useState(false);

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{display: {xs: 'none', sm: 'block'}}}>
          ROBOLUX
        </Typography>
        <ArrowRightIcon sx={{display: {xs: 'block', sm: 'none'}}} />
        <Search>
          <InputBase placeholder='search...' />
        </Search>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color='error'>
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{width: 30, height: 30}}
            src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            onClick={e => setOpen(true)}
          />
        </Icons>
        <UserBox>
          <Avatar
            sx={{width: 30, height: 30}}
            onClick={e => setOpen(true)}
            src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          />
          <Typography variant='span'>Honey</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Nav_bar;
