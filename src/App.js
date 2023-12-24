import {Stack} from '@mui/material';
import Feed from './Components/Feed/feed';
import Right_bar from './Components/Right_Bar//right_bar';
import Side_bar from './Components/Side_Bar/side_bar';
import Nav_bar from './Components/Nav_Bar/nav_bar';
import Add from './Components/Add/add';

const App = () => {
  return (
    <>
      <Nav_bar />
      <Stack direction='row' spacing={2} justifyContent='space-between'>
        <Side_bar />
        <Feed />
        <Right_bar />
      </Stack>
      <Add />
    </>
  );
};

export default App;
