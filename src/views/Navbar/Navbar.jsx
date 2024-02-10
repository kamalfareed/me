import { Box, Stack, Typography } from '@mui/material';
import { styles } from '../../style/styles';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import Section from '../../components/shared/Section';

const Navbar = () => {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'fixed',
        zIndex: 2,
        top: 0,
      }}
    >
      <Section>
        <Stack
          direction={'row'}
          component={'nav'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Link to='/me' style={{ textDecoration: 'none' }}>
            <Typography
              sx={{
                color: 'white',
              }}
              fontSize={styles.fontSize.md}
            >
              fareedkamal
            </Typography>
          </Link>
          <Menu />
        </Stack>
      </Section>
    </Box>
  );
};

export default Navbar;
