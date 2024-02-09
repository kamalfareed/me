import { Box, Stack, Typography } from '@mui/material';
import Section from '../../components/shared/Section';
import { styles } from '../../style/styles';
import { useInView } from 'react-intersection-observer';
import profileImg from 'src/assets/profile.png';
import heroGraphic2 from 'src/assets/heroGraphic2.png';
import element2 from 'src/assets/element2.png';
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
        bgcolor: styles.newPallette[0],
        position: 'relative',
        pt: 10,
        overflowX: { sm: 'unset', xs: 'hidden' },
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
            width={{ lg: '50%', xs: '100%' }}
            textAlign={{ lg: 'unset', xs: 'center' }}
          >
            <Typography
              mb={2}
              color={'white'}
              fontWeight={900}
              fontSize={styles.staticfontSize.xlg}
            >
              Full Stack Dev /
              <br />
              Software Engineer
            </Typography>
            <Typography
              color={'grey'}
              fontWeight={600}
              fontSize={styles.staticfontSize.lg}
            >
              I like to craft solid and scalable software products with great
              user experiences.
            </Typography>
          </Box>
          <Box
            sx={{
              height: { sm: '400px', xs: '300px' },
              width: { sm: '400px', xs: '300px' },
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
