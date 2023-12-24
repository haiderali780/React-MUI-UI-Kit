import {Stack} from '@mui/material';
import Feed from './Components/Feed/feed';
import Right_bar from './Components/Right_Bar//right_bar';
import Side_bar from './Components/Side_Bar/side_bar';
import Nav_bar from './Components/Nav_Bar/nav_bar';
import Add from './Components/Add/add';
import {Box, createTheme, ThemeProvider} from '@mui/material';
import {useState} from 'react';

const App = () => {
  const [mode, setMode] = useState('light');

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Nav_bar />
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <Side_bar setMode={setMode} mode={mode} />
          <Feed />
          <Right_bar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
};

export default App;
