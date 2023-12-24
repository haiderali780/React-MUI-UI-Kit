import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import {Switch} from '@mui/material';
const Item_list = ({items, mode, setMode}) => {
  return (
    <Box position='fixed'>
      <List>
        {items.map((item, index) => (
          <ListItem disablePadding>
            <ListItemButton key={index}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              {index !== items.length - 1 ? (
                <ListItemText primary={item.name} />
              ) : (
                <Switch onChange={e => setMode(mode === 'light' ? 'dark' : 'light')} />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Item_list;
