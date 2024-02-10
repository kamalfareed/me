import { Box, Stack, Typography } from '@mui/material';
import Section from '../../components/shared/Section';
import { styles } from '../../style/styles';
import { useInView } from 'react-intersection-observer';

const list = [
  {
    id: 1,
    src: 'icons/front-end.png',
    title: 'UI / Front-end',
    desc: 'Elevate your digital presence with captivating UI and front-end development. From sleek designs to seamless user experiences, I craft visually appealing and responsive interfaces that leave a lasting impression.',
  },
  {
    id: 2,
    src: 'icons/back-end.png',
    title: 'Database / Back-end',
    desc: 'Empower your applications with robust backend solutions. I specialize in crafting scalable databases and APIs, ensuring seamless communication between your frontend and backend systems for optimal performance and data management.',
  },
  {
    id: 3,
    src: 'icons/aws.png',
    title: 'Cloud / Server',
    desc: 'Harness the power of the cloud with expert server setup. From AWS to Azure, I configure and optimize cloud environments tailored to your project needs, providing scalability, security, and reliability for your applications.',
  },
  {
    id: 4,
    src: 'icons/deployment.png',
    title: 'Deployment',
    desc: 'I offer end-to-end support. From routine maintenance to streamlined product shipping and deployment processes, I ensure your applications run smoothly, allowing you to focus on your core business while I handle the technical intricacies.',
  },
];

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
        py: 5,
        bgcolor: styles.newPallette[0],
      }}
    >
      <Section>
        <Box
          className={`box ${inView ? 'animate' : ''}`}
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              sm: '1fr 1fr',
              xs: '1fr',
            },
            gap: 2,
          }}
        >
          {list.map((item) => (
            <Box
              key={item.id}
              sx={{
                bgcolor: '#202127',
                borderRadius: 4,
                flex: 1,
                p: 3,
              }}
            >
              <div className='icon-wrapper'>
                <img className='skill-icon' src={item.src} />
              </div>
              <Typography
                mt={3}
                color={'white'}
                fontSize={styles.fontSize.md}
                gutterBottom
              >
                {item.title}
              </Typography>
              <Typography color='#dddd' fontSize={styles.fontSize.md}>
                {item.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Section>
    </Box>
  );
};

export default Skills;
