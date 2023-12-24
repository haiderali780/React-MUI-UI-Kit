import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from '@mui/icons-material';

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material';
import Item_list from './item_list';

const Side_bar = () => {
  const items = [
    {
      name: 'Homepage',
      icon: <Home />,
    },

    {
      name: 'Pages',
      icon: <Article />,
    },
    {
      name: 'Groups',
      icon: <Group />,
    },
    {
      name: 'Marketplace',
      icon: <Storefront />,
    },
    {
      name: 'Friends',
      icon: <Person />,
    },
    {
      name: 'Settings',
      icon: <Settings />,
    },
    {
      name: 'Profile',
      icon: <AccountBox />,
    },
    {
      icon: <ModeNight />,
      name: <Switch />,
    },
  ];

  return (
    <Box flex={1} p={2} sx={{display: {xs: 'none', sm: 'block'}}}>
      <Item_list items={items} />
    </Box>
  );
};

export default Side_bar;
