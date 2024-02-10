import { Box, Stack, Typography } from '@mui/material';
import Section from '../../components/shared/Section';
import { styles } from '../../style/styles';
import StarIcon from '@mui/icons-material/Star';
import { Star } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <Section
      sx={{
        py: 5,
      }}
    >
      <Box
        sx={{
          borderRadius: 4,
          bgcolor: styles.newPallette[1],
        }}
      >
        <Stack
          sx={{
            px: 4,
            pt: 4,
          }}
          direction={{ md: 'row', xs: 'column' }}
        >
          <Box flex={1} p={2}>
            <Box mb={2}>
              <Typography
                sx={{
                  color: 'white',
                  fontWeight: 600,
                  mb: 2,
                  fontSize: styles.fontSize.lg,
                }}
              >
                Tjuvholmen
              </Typography>
              <Typography
                sx={{
                  color: styles.newPallette[2],
                  fontSize: styles.fontSize.md,
                }}
              >
                Tjuvholmen is an innovative SaaS platform that transforms stock
                analysis into an intuitive and personalized experience. Users
                benefit from a comprehensive Reports Listing, facilitating easy
                access to insights from the Oslo Stock Exchange.
              </Typography>
            </Box>
            <Link to='/me/work/tjuvholmen' style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  bgcolor: '#3453ff',
                  width: 'fit-content',
                  color: 'white',
                  fontWeight: 500,
                  p: 1,
                  px: 2,
                  textAlign: 'center',
                  fontSize: styles.fontSize.md,
                  borderRadius: 10,
                  '&:hover': {
                    bgcolor: '#0027ff',
                  },
                }}
              >
                See Details
              </Box>
            </Link>
          </Box>
          <Box
            flex={1}
            sx={{
              bgcolor: styles.newPallette[3],
              p: 3,
              borderRadius: 4,
            }}
          >
            <Stack mb={2} direction={'row'}>
              <Star sx={{ color: 'white', fontSize: { sm: 30, xs: 15 } }} />
              <Star sx={{ color: 'white', fontSize: { sm: 30, xs: 15 } }} />
              <Star sx={{ color: 'white', fontSize: { sm: 30, xs: 15 } }} />
              <Star sx={{ color: 'white', fontSize: { sm: 30, xs: 15 } }} />
              <Star sx={{ color: 'white', fontSize: { sm: 30, xs: 15 } }} />
            </Stack>
            <Typography
              mb={2}
              fontSize={styles.fontSize.md}
              color={styles.newPallette[2]}
            >
              "I thoroughly enjoyed collaborating with Fareed. He possesses
              excellent communication skills, works swiftly, and demonstrates a
              commendable proficiency in the tasks he undertakes."
            </Typography>
            <Typography
              color={styles.newPallette[2]}
              fontSize={styles.fontSize.md}
            >
              Soren Zonouz - Founder Tjuvholmen
            </Typography>
          </Box>
        </Stack>
        <Box
          component={'img'}
          src={'/work/2.png'}
          sx={{
            my: 2,
            width: '100%',
          }}
        />
      </Box>
    </Section>
  );
};

export default Portfolio;
