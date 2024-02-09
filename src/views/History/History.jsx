import { Box, Stack, Typography } from '@mui/material';
import Section from '../../components/shared/Section';
import { styles } from '../../style/styles';
import { useInView } from 'react-intersection-observer';
import graphicItem2 from 'src/assets/graphic_item2.png';

const History = () => {
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
        bgcolor: '#1b1b1f',
        overflow: 'hidden',
        py: 5,
      }}
    >
      <Section>
        <Box className={`box ${inView ? 'animate' : ''}`} sx={{}}>
          <Stack
            sx={{
              bgcolor: '#202127',
              color: 'white',
              p: 5,
              borderRadius: 4,
            }}
            spacing={1}
          >
            <Typography fontWeight={500} fontSize={styles.staticfontSize.lg}>
              Over the years,
            </Typography>
            <Box>
              <Typography fontSize={styles.staticfontSize.md} color={'#dddd'}>
                Throughout my career as a software engineer, I've been fortunate
                to work with several renowned companies. These experiences have
                helped me refine my skills and develop a reputation for
                delivering excellence in software engineering.
                <br />
                <br />
                My journey extended beyond the corporate world as I began
                collaborating with clients, both locally and internationally.
                This global interaction allowed me to adapt to diverse
                perspectives and address unique business needs, reinforcing my
                belief in the transformative potential of technology.
                <br />
                <br />
                At the core of my career is a passion for crafting robust
                business products and applications. Solving problems for
                clients, regardless of their location, has been my constant
                focus. Whether it's optimizing performance or creating intuitive
                interfaces, I strive to consistently surpass client expectations
                with every project.
                <br />
                <br />
                I've built products for companies and businesses around the
                globe ranging from marketing websites to complex solutions and
                enterprise apps with focus on fast, elegant and accessible user
                experiences.
              </Typography>
            </Box>
          </Stack>
          {/* <Box
            component={'img'}
            src={graphicItem2}
            sx={{
              objectFit: 'contain',
              height: { lg: '700px', md: '500px', sm: '300px', xs: '200px' },
              position: { lg: 'absolute', sm: 'unset' },
              bottom: 0,
              right: 0,
            }}
          /> */}
        </Box>
      </Section>
    </Box>
  );
};

export default History;
