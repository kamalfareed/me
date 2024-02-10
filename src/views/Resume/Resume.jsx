import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import Section from '../../components/shared/Section';
import { styles } from '../../style/styles';

const Resume = () => {
  return (
    <Section
      sx={{
        bgcolor: styles.newPallette[0],
        py: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
      }}
    >
      <Stack
        direction={{ md: 'row', xs: 'column' }}
        sx={{
          bgcolor: '#202127',
          color: 'white',
          p: 5,
          borderRadius: 4,
          alignItems: { md: 'center', xs: 'start' },
        }}
        spacing={5}
      >
        <Stack flex={0.8}>
          <Typography fontWeight={500} fontSize={styles.fontSize.xlg}>
            Fareed Kamal
          </Typography>
          <Typography
            fontWeight={500}
            mb={2}
            color={styles.newPallette[2]}
            fontSize={styles.fontSize.md}
          >
            Full Stack Dev / Software Engineer
          </Typography>
          <Typography
            fontWeight={500}
            color={styles.newPallette[2]}
            fontSize={styles.fontSize.md}
          >
            Highly skilled Full Stack Developer, specializing in creating
            cutting-edge web applications. Adept at utilizing modern frameworks
            and languages to deliver innovative solutions that enhance user
            experiences.
          </Typography>
        </Stack>
        <Stack spacing={2}>
          <Typography fontWeight={500} fontSize={styles.fontSize.md}>
            Lahore, Pakistan
          </Typography>
          <Typography
            sx={{
              textDecoration: 'none',
              color: 'white',
            }}
            component={'a'}
            href='mailto:fareedkamal.dev@gmail.com'
            fontWeight={500}
            fontSize={styles.fontSize.md}
          >
            fareedkamal.dev@gmail.com
          </Typography>
          <Typography
            sx={{
              textDecoration: 'none',
              color: 'white',
            }}
            component={'a'}
            target='_blank'
            href='https://linkedin.com/in/fareedkamal'
            fontWeight={500}
            fontSize={styles.fontSize.md}
          >
            Linkedin
          </Typography>
          <Typography
            sx={{
              textDecoration: 'none',
              color: 'white',
            }}
            component={'a'}
            target='_blank'
            href='https://upwork.com/fareedkamal'
            fontWeight={500}
            fontSize={styles.fontSize.md}
          >
            Upwork
          </Typography>
          <Typography
            sx={{
              textDecoration: 'none',
              color: 'white',
            }}
            component={'a'}
            target='_blank'
            href='https://github.com/fareedkamal'
            fontWeight={500}
            fontSize={styles.fontSize.md}
          >
            Github
          </Typography>
        </Stack>
      </Stack>
      <Stack
        sx={{
          bgcolor: '#202127',
          color: 'white',
          p: 5,
          borderRadius: 4,
        }}
      >
        <Typography mb={2} fontSize={styles.fontSize.lg}>
          UI / Front-end
        </Typography>
        <Stack direction={'row'} flexWrap={'wrap'} gap={1}>
          {skills.frontEnd.map((item) => (
            <Box
              sx={{
                width: 'fit-content',
                px: 4,
                py: 1,
                borderRadius: 10,
                bgcolor: '#3453ff',
              }}
            >
              <Typography fontSize={styles.fontSize.md}>{item}</Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
      <Stack
        sx={{
          bgcolor: '#202127',
          color: 'white',
          p: 5,
          borderRadius: 4,
        }}
      >
        <Typography mb={2} fontSize={styles.fontSize.lg}>
          Server / Database / Back-end
        </Typography>
        <Stack direction={'row'} flexWrap={'wrap'} gap={1}>
          {skills.backEnd.map((item) => (
            <Box
              sx={{
                width: 'fit-content',
                px: 4,
                py: 1,
                borderRadius: 10,
                bgcolor: '#3453ff',
              }}
            >
              <Typography fontSize={styles.fontSize.md}>{item}</Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Section>
  );
};

const skills = {
  frontEnd: [
    'HTML5',
    'CSS3',
    'Javascript ES6',
    'React JS',
    'Next JS',
    'Material UI',
    'Tailwind CSS',
    'Framer Motion',
    'Bootstrap',
    'Webpack',
    'Vite',
  ],
  backEnd: [
    'Node JS',
    'Express JS',
    'Adonis JS',
    'MySQL',
    'MongoDB',
    'GraphQL',
    'AWS',
  ],
};

export default Resume;
