import { Box, Stack, Typography } from '@mui/material';
import Section from '../../components/shared/Section';
import { styles } from '../../style/styles';
import { useInView } from 'react-intersection-observer';
7;
const Skills = () => {
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
        overflow: 'hidden',
      }}
    >
      <Section>
        <Stack
          className={`box ${inView ? 'animate' : ''}`}
          sx={{ py: 20, height: '100%' }}
          spacing={5}
          justifyContent={'center'}
        >
          <Stack direction={'row'} alignItems={'center'}>
            <Box flex={1}>
              <Typography
                color={styles.pallette[2]}
                fontWeight={900}
                fontSize={styles.fontSize.lg}
                gutterBottom
              >
                Front-end Development
              </Typography>
              <Typography fontSize={styles.fontSize.md}>
                I specialize in React and JavaScript to create dynamic and
                responsive user interfaces. My attention to pixel-perfect design
                ensures that every element aligns flawlessly with your vision.
                Using Figma, I meticulously design, prototype and code, bringing
                ideas to life with precision and style.
              </Typography>
            </Box>
            <Box
              sx={{
                display: { lg: 'unset', xs: 'none' },
              }}
              flex={1.5}
            >
              <Stack
                margin={'auto'}
                width={'fit-content'}
                direction={'row'}
                spacing={0.5}
              >
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
              </Stack>
            </Box>
          </Stack>
          <Stack direction={'row'} alignItems={'center'}>
            <Box
              sx={{
                display: { lg: 'unset', xs: 'none' },
              }}
              flex={1.5}
            >
              <Stack
                margin={'auto'}
                width={'fit-content'}
                direction={'row'}
                spacing={0.5}
              >
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
              </Stack>
            </Box>
            <Box flex={1}>
              <Typography
                color={styles.pallette[2]}
                fontWeight={900}
                fontSize={styles.fontSize.lg}
                gutterBottom
              >
                Back-end Development
              </Typography>
              <Typography fontSize={styles.fontSize.md}>
                I utilize Node.js, MySQL, and MongoDB to build robust and
                efficient solutions. With a keen eye for database management and
                server-side logic, I ensure your systems operate smoothly and
                securely. My focus on clean and maintainable code guarantees
                your applications run seamlessly, even when handling complex
                data and processes.
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Section>
    </Box>
  );
};

const Dot = () => {
  return (
    <Box
      sx={{
        height: '10px',
        width: '10px',
        opacity: 0.5,
        border: `1px solid ${styles.pallette[2]}`,
        borderRadius: '100%',
      }}
    />
  );
};

export default Skills;
