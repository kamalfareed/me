import { Box, Stack, Typography } from '@mui/material';
import Section from '../../components/shared/Section';
import { styles } from '../../style/styles';
import { useInView } from 'react-intersection-observer';
import profileImg from 'src/assets/profile.png';
import heroGraphic2 from 'src/assets/heroGraphic2.png';
import element2 from 'src/assets/element2.png';
import './styles.css';
import dottedGrid from 'src/assets/new-graphics/dotted-grid.png';

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
        overflowX: 'hidden',
        overflowY: 'hidden',
        position: 'relative',
        background:
          'radial-gradient(circle, rgba(251,172,63,1) 0%, rgba(252,70,107,1) 100%)',
      }}
    >
      <Section>
        <Stack
          sx={{
            position: 'relative',
            flexDirection: { lg: 'row', sm: 'column' },
            py: { lg: 20, xs: 10 },
            height: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* <div className={`square box ${inView ? 'animate' : ''}`} />
          <div className={`circle box ${inView ? 'animate' : ''}`} /> */}
          <div className='blur-object blur-object-1' />
          <div className='blur-object blur-object-2' />

          {/* <Box
            className={`box ${inView ? 'animate' : ''}`}
            component={'img'}
            sx={{
              position: 'absolute',
              height: '30em',
              right: '0em',
            }}
            src={heroGraphic2}
          />
          <Box
            className={`hero-right ${inView ? 'hero-right-animate' : ''}`}
            component={'img'}
            sx={{
              position: 'absolute',
              bottom: '14em',
              height: '20em',
              transform: 'rotate(90deg)',
            }}
            src={element2}
          />
          <Box
            className={`hero-left ${inView ? 'hero-left-animate' : ''}`}
            component={'img'}
            sx={{
              position: 'absolute',
              bottom: '5em',
              height: '15em',
              transform: 'rotate(-90deg)',
            }}
            src={element2}
          /> */}

          <Stack
            className={`box ${inView ? 'animate' : ''}`}
            width={{ lg: '50%', xs: '100%' }}
          >
            <Typography
              color={'white'}
              fontWeight={900}
              fontSize={styles.fontSize.lg}
            >
              Software Engineer / Full Stack Dev.
            </Typography>
            <Typography color={'white'} fontSize={{ lg: 20, xs: 10 }}>
              I like to craft solid and scalable software products with great
              user experiences.
            </Typography>
          </Stack>
          <Box
            className={`box ${inView ? 'animate' : ''}`}
            sx={{
              height: { lg: '400px', xs: '200px' },
              width: { lg: '400px', xs: '200px' },
              border: '1px solid white',
              zIndex: 1,
              mt: { xs: 10 },
            }}
          >
            <Box
              component={'img'}
              height={'100%'}
              width={'100%'}
              src={profileImg}
              sx={{
                m: '-20px',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Stack>
      </Section>
    </Box>
  );
};

export default Hero;
