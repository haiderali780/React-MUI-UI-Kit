import {Box} from '@mui/material';
import React from 'react';

const Side_bar = () => {
  return (
    <Box bgcolor='grey' flex={1} p={2} sx={{display: {xs: 'none', sm: 'block'}}}>
      sidebar
    </Box>
  );
};

export default Side_bar;
