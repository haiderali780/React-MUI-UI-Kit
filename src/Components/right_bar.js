import {Box} from '@mui/material';
import React from 'react';

const Right_bar = () => {
  return (
    <Box bgcolor='purple' flex={2} p={2} sx={{display: {xs: 'none', sm: 'block'}}}>
      rightside
    </Box>
  );
};

export default Right_bar;
