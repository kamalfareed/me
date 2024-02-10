import { Box, Stack, Typography } from '@mui/material';
import Section from '../../components/shared/Section';
import StyledButton from '../../components/shared/StyledButton';
import { styles } from '../../style/styles';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const Work = () => {
  const color = styles.pallette[2];
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Box
      ref={ref}
      sx={{
        width: '100%',
        overflow: 'hidden',
        bgcolor: styles.newPallette[0],
        py: 5,
      }}
    >
      <Section>
        <Stack spacing={4} direction={{ sm: 'row', xs: 'column' }}>
          <Box
            className={`left ${inView ? 'left-animate' : ''}`}
            sx={{
              flex: 1,
              borderRadius: 4,
              bgcolor: styles.newPallette[1],
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              p: 5,
              gap: 5,
            }}
          >
            <Box textAlign={'center'}>
              <Typography
                color='white'
                mb={2}
                fontSize={styles.fontSize.lg}
                fontWeight={500}
              >
                I build & code stuff
              </Typography>
              <Typography
                color={styles.newPallette[2]}
                fontSize={styles.fontSize.md}
              >
                Open source projects, web apps and experimentals.
              </Typography>
            </Box>

            <Link to='/me/work' style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  bgcolor: '#3453ff',
                  color: 'white',
                  fontWeight: 700,
                  p: 2,
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
          </Box>
          <Box
            className={`right ${inView ? 'right-animate' : ''}`}
            sx={{
              flex: 1,
              borderRadius: 4,
              bgcolor: styles.newPallette[1],
              p: 5,
              gap: 5,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box textAlign={'center'}>
              <Typography
                mb={2}
                color='white'
                fontSize={styles.fontSize.lg}
                fontWeight={500}
              >
                I work in teams too
              </Typography>
              <Typography
                color={styles.newPallette[2]}
                fontSize={styles.fontSize.md}
              >
                Professional experience, collaboration and Skills
              </Typography>
            </Box>
            <Link to='/me/resume' style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  bgcolor: '#3453ff',
                  color: 'white',
                  fontWeight: 700,
                  p: 2,
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
          </Box>
        </Stack>
      </Section>
    </Box>
  );
};

export default Work;
