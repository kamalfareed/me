import { useState } from 'react';
import './menu.css';
import { Box, Stack, Typography } from '@mui/material';
import { styles } from '../../style/styles';
import { Link } from 'react-router-dom';
import linkedinLogo from 'src/assets/logos/linkedin.png';
import upworkLogo from 'src/assets/logos/upwork.png';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='menu-wrapper'>
      <div
        style={{
          backgroundColor: isMenuOpen ? 'transparent' : '',
        }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className='menu-button'
      >
        <div className={!isMenuOpen ? 'line' : 'line line-1-animate'} />
        <div className={!isMenuOpen ? 'line' : 'line line-2-animate'} />
      </div>
      <div
        style={{
          overflow: 'hidden',
          borderRadius: 20,
        }}
        className={`menu ${isMenuOpen ? 'menu-active' : ''}`}
      >
        <div className='menu-blur-bg' />
        <Stack
          sx={{
            px: { lg: 10, sm: 10, xs: 4 },
            py: { lg: 12, sm: 12, xs: 6 },
            height: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Stack spacing={2}>
            <Link
              to='/me/work'
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <Typography fontSize={styles.fontSize.md}>My Work</Typography>
            </Link>
            <Link
              to='/me/resume'
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <Typography fontSize={styles.fontSize.md}>My Resume</Typography>
            </Link>
          </Stack>
          <Stack spacing={2}>
            <Typography color={'white'} fontSize={styles.fontSize.md}>
              SAY HELLO
            </Typography>
            <Typography color={'white'} fontSize={styles.fontSize.md}>
              fareedkamal.dev@gmail.com
            </Typography>
          </Stack>
          <Stack direction={'row'} spacing={5} alignItems={'center'}>
            <Link target='_blank' to={'https://linkedin.com/in/fareedkamal'}>
              <Box
                component='img'
                sx={{ height: { sm: '40px', xs: '20px' } }}
                src={linkedinLogo}
              />
            </Link>
            <Link
              target='_blank'
              to={'https://www.upwork.com/freelancers/fareedkamal'}
            >
              <Box
                component='img'
                sx={{ height: { sm: '40px', xs: '20px' } }}
                src={upworkLogo}
              />
            </Link>
          </Stack>
        </Stack>
      </div>
    </div>
  );
};

export default Menu;
