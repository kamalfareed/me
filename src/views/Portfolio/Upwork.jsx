import { Box, Stack, Typography } from '@mui/material';
import Section from '../../components/shared/Section';
import { styles } from '../../style/styles';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import upworkReview from 'src/assets/upwork_review.png';
import ecommerce from 'src/assets/work/ecommerce.png';
import diana from 'src/assets/work/diana.png';

const Upwork = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when the element enters the viewport
    threshold: 0.3,
    // Adjust as needed
  });
  return (
    <Box
      ref={ref}
      sx={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        py: 15,
      }}
    >
      <Section>
        <Box className={`box ${inView ? 'animate' : ''}`}>
          <Typography my={5} textAlign={'center'} fontSize={styles.fontSize.md}>
            Work i've taken on for clients.
          </Typography>
          <Link
            target='_blank'
            to={'https://www.upwork.com/freelancers/fareedkamal'}
          >
            <Box
              component={'img'}
              sx={{
                width: { lg: 'fit-content', xs: '100%' },
                borderRadius: 5,
                m: 'auto',
                p: 5,
                backgroundColor: '#001800',
                display: 'flex',
              }}
              src={upworkReview}
            />
          </Link>
          <Stack
            mt={5}
            sx={{
              gap: 5,
              placeContent: 'center',
              flexFlow: 'wrap',
            }}
          >
            <Box
              sx={{
                overflow: 'hidden',
                boxShadow: '0px 10px 43px -40px',
                height: '300px',
                width: '400px',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'white',
                cursor: 'pointer',
              }}
            >
              <Box
                component={'img'}
                sx={{
                  height: '70%',
                  width: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top',
                }}
                src={ecommerce}
              />
              <Typography p={3} fontSize={styles.fontSize.md} fontWeight={800}>
                Ecommerce Store
              </Typography>
            </Box>
            <Box
              sx={{
                overflow: 'hidden',
                boxShadow: '0px 10px 43px -40px',
                height: '300px',
                width: '400px',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'white',
                cursor: 'pointer',
              }}
            >
              <Box
                component={'img'}
                sx={{
                  height: '70%',
                  width: '100%',
                  objectFit: 'cover',
                }}
                src={diana}
              />
              <Typography
                sx={{
                  p: 3,
                }}
                fontSize={styles.fontSize.md}
                fontWeight={800}
              >
                Hotel Reservation Application
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Section>
    </Box>
  );
};

export default Upwork;
