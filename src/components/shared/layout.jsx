import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../../views/Navbar/Navbar';
import Footer from '../../views/Footer/Footer';
import { styles } from '../../style/styles';
import ScrollToTop from '../utils/ScrollToTop';

const Layout = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: styles.newPallette[0],
      }}
    >
      <Navbar />
      <Box
        sx={{
          flex: 1,
          bgcolor: styles.newPallette[0],
        }}
      >
        <Outlet />
      </Box>
      <Footer />

      <ScrollToTop />
    </Box>
  );
};

export default Layout;
