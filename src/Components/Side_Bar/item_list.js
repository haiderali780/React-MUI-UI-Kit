import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';

const Item_list = ({items}) => {
  return (
    <Box position='fixed'>
      <List>
        {items.map((item, index) => (
          <ListItem disablePadding>
            <ListItemButton key={index}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              {index !== items.length - 1 ? <ListItemText primary={item.name} /> : item.name}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Item_list;
