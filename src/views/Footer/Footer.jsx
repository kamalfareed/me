import { Box, Stack, Typography } from '@mui/material';
import StyledFooter from '../../components/shared/StyledFooter';
import { styles } from '../../style/styles';
import { Link } from 'react-router-dom';
import linkedinLogo from 'src/assets/logos/linkedin.png';
import upworkLogo from 'src/assets/logos/upwork.png';
import Section from '../../components/shared/Section';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        py: 5,
        bgcolor: styles.newPallette[0],
      }}
    >
      <Section>
        <Stack
          mb={{ lg: 15, xs: 5 }}
          direction={{ sm: 'row', xs: 'column' }}
          spacing={{ md: 50, xs: 5 }}
        >
          <Stack color={'white'} spacing={4}>
            <Typography fontSize={styles.fontSize.md}>SAY HELLO</Typography>
            <Typography
              component={'a'}
              href='mailto:fareedkamal.dev@gmail.com'
              sx={{
                textDecoration: 'none',
                color: 'white',
              }}
              fontSize={styles.fontSize.md}
            >
              fareedkamal.dev@gmail.com
            </Typography>
          </Stack>
          <Stack color={'white'} spacing={4}>
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
        </Stack>

        <Stack
          color={'white'}
          borderTop={'1px solid white'}
          py={5}
          spacing={5}
          direction={{ sm: 'row', xs: 'column-reverse' }}
          justifyContent={'space-between'}
          alignItems={'center'}
          fontSize={styles.fontSize.md}
        >
          <Typography fontSize={styles.fontSize.md}>
            © Fareed Kamal 2024
          </Typography>
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
      </Section>
    </Box>
  );
};

export default Footer;
