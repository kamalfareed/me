import { Box } from '@mui/material';
import Hero from '../Hero/Hero';
import Skills from '../Skills/Skills';
import Work from '../Work/Work';
import Message from '../Message/Message';
import History from '../History/History';

const Home = () => {
  return (
    <Box>
      <Hero />
      <Skills />
      <History />
      <Work />
      <Message />
    </Box>
  );
};

export default Home;
