import { Box, Stack, Typography } from '@mui/material';
import StyledFooter from '../../components/shared/StyledFooter';
import { styles } from '../../style/styles';
import { Link } from 'react-router-dom';
import linkedinLogo from 'src/assets/logos/linkedin.png';
import upworkLogo from 'src/assets/logos/upwork.png';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        py: { lg: 10, xs: 4 },
        backgroundColor: styles.pallette[2],
      }}
    >
      <StyledFooter>
        <Stack
          mb={{ lg: 15, xs: 5 }}
          direction={{ lg: 'row', xs: 'column' }}
          spacing={{ lg: 50, xs: 5 }}
        >
          <Stack fontSize={styles.fontSize.md} color={'white'} spacing={4}>
            <Typography fontSize={styles.fontSize.md}>SAY HELLO</Typography>
            <Typography fontSize={styles.fontSize.md}>
              fareedkamal.dev@gmail.com
            </Typography>
          </Stack>
          <Stack color={'white'} spacing={4} fontSize={styles.fontSize.md}>
            <Link
              to='/me/work'
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <div className='hover-wrapper'>
                <Typography
                  className='hover-style'
                  fontSize={styles.fontSize.md}
                >
                  My Work
                </Typography>
              </div>
            </Link>

            <Link
              to='/me/resume'
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <div className='hover-wrapper'>
                <Typography
                  className='hover-style'
                  fontSize={styles.fontSize.md}
                >
                  My Resume
                </Typography>
              </div>
            </Link>
          </Stack>
        </Stack>

        <Stack
          color={'white'}
          borderTop={'1px solid white'}
          py={5}
          spacing={5}
          direction={{ lg: 'row', xs: 'column-reverse' }}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Typography>© Fareed Kamal 2023</Typography>
          <Stack direction={'row'} spacing={5} alignItems={'center'}>
            <Link target='_blank' to={'https://linkedin.com/in/fareedkamal'}>
              <img
                style={{
                  height: '35px',
                }}
                src={linkedinLogo}
              />
            </Link>
            {/* <Link target='_blank' to={'https://upwork.com'}>
              <img
                style={{
                  height: '35px',
                }}
                src='src/assets/logos/twitter.png'
              />
            </Link> */}
            {/* <Link target='_blank' to={'https://upwork.com'}>
              <img
                style={{
                  height: '35px',
                }}
                src='src/assets/logos/instagram.png'
              />
            </Link> */}
            <Link
              target='_blank'
              to={'https://www.upwork.com/freelancers/fareedkamal'}
            >
              <img
                style={{
                  height: '35px',
                }}
                src={upworkLogo}
              />
            </Link>
          </Stack>
        </Stack>
      </StyledFooter>
    </Box>
  );
};

export default Footer;
