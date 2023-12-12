import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import Section from '../../components/shared/Section';
import { styles } from '../../style/styles';
import { resumeData } from './resumeData';
import { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: '100%',
          my: '5em',
        }}
      >
        <Section>
          <Grid
            sx={{
              backgroundColor: styles.secondaryPallete[1],
              px: 5,
              py: 10,
            }}
            container
          >
            <Grid
              sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 5 }}
              item
              md={3}
              xs={12}
            >
              <Stack sx={{ wordBreak: 'break-word' }}>
                <Typography fontSize={styles.fontSize.md}>
                  Lahore, Pakistan
                </Typography>
                <Typography
                  fontWeight={700}
                  color={styles.pallette[2]}
                  fontSize={styles.fontSize.md}
                >
                  fareedkamal.dev@gmail.com
                </Typography>
                <Typography
                  sx={{
                    textDecoration: 'none',
                  }}
                  component={'a'}
                  target='_blank'
                  href='https://linkedin.com/in/fareedkamal'
                  fontWeight={700}
                  color={styles.pallette[2]}
                  fontSize={styles.fontSize.md}
                >
                  linkedin.com/fareedkamal
                </Typography>
                <Typography
                  sx={{
                    textDecoration: 'none',
                  }}
                  component={'a'}
                  target='_blank'
                  href='https://github.com/fareedkamal'
                  fontWeight={700}
                  color={styles.pallette[2]}
                  fontSize={styles.fontSize.md}
                >
                  github.com/fareedkamal
                </Typography>
              </Stack>
              <Stack component={'ul'} fontSize={styles.fontSize.md}>
                <Typography
                  fontWeight={700}
                  color={styles.pallette[2]}
                  fontSize={styles.fontSize.md}
                >
                  Front-end:
                </Typography>

                <Typography
                  component={'li'}
                  color={styles.secondaryPallete[2]}
                  fontSize={styles.fontSize.md}
                >
                  ReactJS
                </Typography>
                <Typography
                  component={'li'}
                  color={styles.secondaryPallete[2]}
                  fontSize={styles.fontSize.md}
                >
                  HTML / CSS
                </Typography>
                <Typography
                  component={'li'}
                  color={styles.secondaryPallete[2]}
                  fontSize={styles.fontSize.md}
                >
                  Redux
                </Typography>

                <Typography
                  component={'li'}
                  color={styles.secondaryPallete[2]}
                  fontSize={styles.fontSize.md}
                >
                  Material UI
                </Typography>
                <Typography
                  component={'li'}
                  color={styles.secondaryPallete[2]}
                  fontSize={styles.fontSize.md}
                >
                  Tailwind CSS
                </Typography>
                <Typography
                  component={'li'}
                  color={styles.secondaryPallete[2]}
                  fontSize={styles.fontSize.md}
                >
                  Framer Motion
                </Typography>
                <Typography
                  component={'li'}
                  color={styles.secondaryPallete[2]}
                  fontSize={styles.fontSize.md}
                >
                  Bootstrap
                </Typography>
                <Typography
                  component={'li'}
                  color={styles.secondaryPallete[2]}
                  fontSize={styles.fontSize.md}
                >
                  Webpack
                </Typography>
                <Typography
                  component={'li'}
                  color={styles.secondaryPallete[2]}
                  fontSize={styles.fontSize.md}
                >
                  Vite
                </Typography>
              </Stack>
              <Stack component={'ul'} fontSize={styles.fontSize.md}>
                <Typography
                  fontWeight={700}
                  color={styles.pallette[2]}
                  fontSize={styles.fontSize.md}
                >
                  Back-end:
                </Typography>

                <Typography
                  component={'li'}
                  color={styles.secondaryPallete[2]}
                  fontSize={styles.fontSize.md}
                >
                  NodeJS
                </Typography>
                <Typography
                  component={'li'}
                  color={styles.secondaryPallete[2]}
                  fontSize={styles.fontSize.md}
                >
                  ExpressJS
                </Typography>

                <Typography
                  component={'li'}
                  color={styles.secondaryPallete[2]}
                  fontSize={styles.fontSize.md}
                >
                  AdonisJS
                </Typography>
                <Typography
                  component={'li'}
                  color={styles.secondaryPallete[2]}
                  fontSize={styles.fontSize.md}
                >
                  MySQL
                </Typography>
                <Typography
                  component={'li'}
                  color={styles.secondaryPallete[2]}
                  fontSize={styles.fontSize.md}
                >
                  MongoDB
                </Typography>
                <Typography
                  component={'li'}
                  color={styles.secondaryPallete[2]}
                  fontSize={styles.fontSize.md}
                >
                  GraphQL
                </Typography>
              </Stack>
              <Stack component={'ul'} fontSize={styles.fontSize.md}>
                <Typography
                  fontWeight={700}
                  color={styles.pallette[2]}
                  fontSize={styles.fontSize.md}
                >
                  Other:
                </Typography>

                <Typography
                  component={'li'}
                  color={styles.secondaryPallete[2]}
                  fontSize={styles.fontSize.md}
                >
                  Python
                </Typography>
                <Typography
                  component={'li'}
                  color={styles.secondaryPallete[2]}
                  fontSize={styles.fontSize.md}
                >
                  Typescript
                </Typography>
                <Typography
                  component={'li'}
                  color={styles.secondaryPallete[2]}
                  fontSize={styles.fontSize.md}
                >
                  Selenium / Data Scraping
                </Typography>

                <Typography
                  component={'li'}
                  color={styles.secondaryPallete[2]}
                  fontSize={styles.fontSize.md}
                >
                  AWS
                </Typography>
                <Typography
                  component={'li'}
                  color={styles.secondaryPallete[2]}
                  fontSize={styles.fontSize.md}
                >
                  Git / Github
                </Typography>
                <Typography
                  component={'li'}
                  color={styles.secondaryPallete[2]}
                  fontSize={styles.fontSize.md}
                >
                  Vercel
                </Typography>
              </Stack>
            </Grid>
            <Grid item md={9} xs={12}>
              <Stack>
                <Typography
                  color={styles.pallette[2]}
                  fontWeight={700}
                  fontSize={styles.fontSize.xlg}
                >
                  Fareed Kamal
                </Typography>
                <Typography fontSize={styles.fontSize.md}>
                  Full Stack Developer & Software Engineer
                </Typography>
                <Typography mt={3} fontSize={styles.fontSize.md}>
                  Highly skilled Full Stack Developer, specializing in creating
                  cutting-edge web applications. Adept at utilizing modern
                  frameworks and languages to deliver innovative solutions that
                  enhance user experiences.
                </Typography>
                <Divider sx={{ my: 3 }} />
              </Stack>
              <Stack spacing={3}>
                <Stack spacing={1}>
                  <Typography
                    color={styles.pallette[2]}
                    fontSize={styles.fontSize.md}
                    fontWeight={700}
                  >
                    Experience
                  </Typography>
                  <Typography
                    color={styles.secondaryPallete[2]}
                    fontSize={styles.fontSize.md}
                  >
                    I've worked on a handful of web projects over the years,
                    some of which were for the following organizations:
                  </Typography>
                </Stack>
                <Stack spacing={3}>
                  {resumeData.experience.map((exp) => (
                    <Experience key={exp.id} exp={exp} />
                  ))}
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Section>
      </Box>
    </>
  );
};

const Experience = ({ exp }) => {
  const { company, title, duration, desc, tasks } = exp;
  return (
    <Stack spacing={2}>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Stack direction={'row'} spacing={2}>
          <Typography
            fontSize={styles.fontSize.md}
            fontWeight={600}
            color={styles.pallette[2]}
          >
            {company}
          </Typography>
          <Typography
            color={styles.secondaryPallete[2]}
            fontSize={styles.fontSize.md}
          >
            {title}
          </Typography>
        </Stack>
        <Typography
          color={styles.secondaryPallete[2]}
          fontSize={styles.fontSize.md}
        >
          {duration}
        </Typography>
      </Stack>
      <Typography
        fontSize={styles.fontSize.md}
        color={styles.secondaryPallete[2]}
      >
        {desc}
      </Typography>
      <Stack component={'ul'} spacing={1}>
        {tasks.map((task) => (
          <Typography
            component={'li'}
            key={task.id}
            color={styles.secondaryPallete[2]}
            fontSize={styles.fontSize.md}
          >
            {task.desc}
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
};

export default Resume;
