import { Box, Stack, Typography } from '@mui/material';
import Section from '../../components/shared/Section';
import { styles } from '../../style/styles';
import { useInView } from 'react-intersection-observer';
import profileImg from 'src/assets/profile.png';
import heroGraphic2 from 'src/assets/heroGraphic2.png';
import element2 from 'src/assets/element2.png';
import './styles.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <Box
      ref={ref}
      className='section'
      sx={{
        width: '100%',
        bgcolor: styles.newPallette[0],
        position: 'relative',
        pt: 5,
      }}
    >
      <Section>
        <Stack
          className={`box ${inView ? 'animate' : ''}`}
          sx={{
            position: 'relative',
            flexDirection: { lg: 'row', xs: 'column-reverse' },
            height: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box
            width={{ md: '50%', xs: '100%' }}
            textAlign={{ lg: 'unset', xs: 'center' }}
          >
            <Typography
              mb={2}
              color={'white'}
              fontWeight={700}
              fontSize={styles.fontSize.xlg}
            >
              Full Stack Dev /
              <br />
              Software Engineer
            </Typography>
            <Typography
              color={'grey'}
              fontWeight={600}
              fontSize={styles.fontSize.lg}
            >
              I like to craft solid and scalable software products with great
              user experiences.
            </Typography>
            <Stack
              mt={3}
              justifyContent={{ lg: 'start', xs: 'center' }}
              direction={'row'}
              spacing={2}
            >
              <Link to='/me/work' style={{ textDecoration: 'none' }}>
                <Box
                  sx={{
                    bgcolor: '#3453ff',
                    width: 'fit-content',
                    color: 'white',
                    fontWeight: 500,
                    p: 1,
                    px: 4,
                    textAlign: 'center',
                    fontSize: styles.fontSize.md,
                    borderRadius: 10,
                    '&:hover': {
                      bgcolor: '#0027ff',
                    },
                  }}
                >
                  Work
                </Box>
              </Link>
              <Link to='/me/resume' style={{ textDecoration: 'none' }}>
                <Box
                  sx={{
                    bgcolor: '#3453ff',
                    width: 'fit-content',
                    color: 'white',
                    fontWeight: 500,
                    p: 1,
                    px: 4,
                    textAlign: 'center',
                    fontSize: styles.fontSize.md,
                    borderRadius: 10,
                    '&:hover': {
                      bgcolor: '#0027ff',
                    },
                  }}
                >
                  Resume
                </Box>
              </Link>
            </Stack>
          </Box>
          <Box
            sx={{
              height: { sm: '400px', xs: '300px' },
              width: { sm: '400px', xs: 'auto' },
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div className='blur-profile-bg' />
            <Box
              component={'img'}
              height={{ sm: '300px', xs: '200px' }}
              width={{ sm: '300px', xs: '200px' }}
              borderRadius='100%'
              src={profileImg}
              sx={{
                objectFit: 'contain',
                zIndex: 1,
              }}
            />
          </Box>
        </Stack>
      </Section>
    </Box>
  );
};

export default Hero;
