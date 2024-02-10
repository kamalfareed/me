import { Box, Input, Stack, Typography } from '@mui/material';
import Section from '../../components/shared/Section';
import StyledButton from '../../components/shared/StyledButton';
import { styles } from '../../style/styles';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const Message = () => {
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
        py: 5,
        overflow: 'hidden',
        bgcolor: styles.newPallette[0],
      }}
    >
      <Section>
        <Stack
          className={`box ${inView ? 'animate' : ''}`}
          bgcolor={styles.newPallette[1]}
          borderRadius={4}
          p={5}
          color={'white'}
          spacing={{ md: 10, xs: 5 }}
        >
          <Stack m={'auto'} textAlign={'center'} spacing={2}>
            <Typography fontWeight={800} fontSize={styles.fontSize.lg}>
              Send me a message!
            </Typography>
            <Typography
              color={styles.newPallette[2]}
              fontSize={styles.fontSize.md}
            >
              Got a question or proposal, or just want to say hello? Go ahead.
            </Typography>
          </Stack>
          <Stack
            direction={{ sm: 'row', xs: 'column' }}
            justifyItems={'center'}
            spacing={{ md: 15, xs: 5 }}
          >
            <Box flex={1}>
              <Typography mb={3} fontSize={styles.fontSize.md}>
                Your Name
              </Typography>
              <Input
                fullWidth
                placeholder='Enter your name'
                sx={{
                  pb: 1,
                  color: 'white',
                  borderBottom: '1px solid grey',
                  fontSize: styles.fontSize.md,
                }}
              />
            </Box>
            <Box flex={1}>
              <Typography mb={3} fontSize={styles.fontSize.md}>
                Email Address
              </Typography>
              <Input
                fullWidth
                placeholder='Enter your email address'
                sx={{
                  pb: 1,
                  fontSize: styles.fontSize.md,
                  color: 'white',
                  borderBottom: '1px solid grey',
                }}
              />
            </Box>
          </Stack>
          <Box>
            <Typography mb={3} fontSize={styles.fontSize.md}>
              Your Message
            </Typography>
            <Input
              fullWidth
              multiline
              placeholder='Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?'
              sx={{
                pb: 1,
                fontSize: styles.fontSize.md,
                color: 'white',
                borderBottom: '1px solid grey',
              }}
            />
          </Box>

          <Link
            style={{
              textDecoration: 'none',
              display: 'flex',
              justifyContent: 'center',
            }}
            target='_blank'
            to={'https://www.upwork.com/freelancers/fareedkamal'}
          >
            <Box
              sx={{
                bgcolor: '#3453ff',
                color: 'white',
                fontWeight: 700,
                alignItems: 'center',
                p: 2,
                flex: 0.5,
                textAlign: 'center',
                fontSize: styles.fontSize.md,
                borderRadius: 10,
                '&:hover': {
                  bgcolor: '#0027ff',
                },
              }}
            >
              Send
            </Box>
          </Link>
        </Stack>
      </Section>
    </Box>
  );
};

export default Message;
