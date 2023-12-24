import {Stack} from '@mui/material';
import Feed from './Components/feed';
import Right_bar from './Components/right_bar';
import Side_bar from './Components/side_bar';
import Nav_bar from './Components/nav_bar';

const App = () => {
  return (
    <>
      <Nav_bar />
      <Stack direction='row' spacing={2} justifyContent='space-between'>
        <Side_bar />
        <Feed />
        <Right_bar />
      </Stack>
    </>
  );
};

export default App;
