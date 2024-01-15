import { Box, Stack, Typography } from '@mui/material';
import Section from '../../components/shared/Section';
import { styles } from '../../style/styles';
import { useInView } from 'react-intersection-observer';
import profileImg from 'src/assets/profile.png';
import './styles.css';

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
<<<<<<< HEAD
        background: 'linear-gradient(65deg, #1300ff 0%, #ff6334f5 100%)',
      }}
    >
      {/* <Box
        sx={{
          backgroundColor: styles.secondaryPallete[0],
          height: '100%',
          width: { lg: '25%', xs: '100%' },
          position: 'absolute',
          right: 0,
          top: 0,
        }}
      /> */}
=======
        backgroundColor: 'white',
      }}
    >
>>>>>>> c0c2520102448ae36ef099897b6a38deb8ea1407
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
              color={'black'}
              className='text-1'
              fontWeight={900}
              fontSize={styles.fontSize.lg}
            >
<<<<<<< HEAD
              {'<'} Software Engineer
              <br />/ Full Stack Dev {'/>;'}
=======
              {`<`} Software Engineer <br /> / Full Stack Dev {`/>`};
>>>>>>> c0c2520102448ae36ef099897b6a38deb8ea1407
            </Typography>
            <Typography color={'black'} fontSize={{ lg: 20, xs: 10 }}>
              I like to craft solid and scalable software products with great
              user experiences.
            </Typography>
          </Stack>
          <Box
            className={`box ${inView ? 'animate' : ''}`}
            sx={{
              height: { lg: '400px', xs: '200px' },
              width: { lg: '400px', xs: '200px' },
              border: '1px solid #ff743d',
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
<<<<<<< HEAD
=======
                border: '1px solid #3150ff',
>>>>>>> c0c2520102448ae36ef099897b6a38deb8ea1407
              }}
            />
          </Box>
        </Stack>
      </Section>
    </Box>
  );
};

export default Hero;
