import { Box, Divider, Stack, Typography } from '@mui/material';
import Section from '../../components/shared/Section';
import { styles } from '../../style/styles';

const Tjuvholmen = () => {
  return (
    <Section sx={{ py: 5 }}>
      <Box
        sx={{
          p: { sm: 5, xs: 2 },
          borderRadius: 4,
          bgcolor: styles.newPallette[1],
        }}
      >
        {details.map((i) => (
          <Box mb={3} key={i.id}>
            <Box mb={3}>
              <Typography mb={1} color={'white'} fontSize={styles.fontSize.xlg}>
                {i.title}
              </Typography>
              <Typography
                sx={{ whiteSpace: 'pre-line' }}
                color={styles.newPallette[2]}
                fontSize={styles.fontSize.md}
              >
                {i.desc}
              </Typography>
            </Box>
            {i.images.map((img) => (
              <Box
                component={'img'}
                src={img}
                sx={{
                  width: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top',
                }}
              />
            ))}
            <Divider color='white' sx={{ my: 5 }} />
          </Box>
        ))}
      </Box>
    </Section>
  );
};

const details = [
  {
    id: 1,
    title: 'Project Overview',
    desc: `I spearheaded the development of Tjuvholmen, a cutting-edge Software as a Service (SaaS) platform designed to empower users with comprehensive insights into stock reports and analysis. The platform features a user-friendly admin dashboard with a myriad of functionalities, including seamless user creation, efficient report uploads, and robust subscription management.

    Tjuvholmen stands out by offering independent analyses of all shares on the Oslo Stock Exchange. Leveraging a disciplined model, it identifies compelling opportunities for users in both short and long-term scenarios. The platform goes beyond traditional offerings by sharing the team's own transactions, providing a unique perspective for informed decision-making.
    
    One of the key highlights is the "Morning Report," a daily digest that encapsulates crucial market events from both local and global perspectives. This includes stock exchange-sensitive news, quarterly results, trading updates, traditional ideas, and more, ensuring users stay well-informed about the dynamic world of stock trading.
    
    In summary, Tjuvholmen is a comprehensive SaaS solution that enhances user access to stock reports, analysis, and valuable market insights, coupled with a feature-rich admin dashboard for seamless management of user interactions, report uploads, and subscriptions.`,
    images: ['/tjuvholmen/login-page.png', '/work/1.png'],
  },
  {
    id: 2,
    title: 'Stock Reports Listing',
    desc: `The Reports Listing feature on Tjuvholmen provides users with a seamless and organized interface to access a wealth of stock reports on the Oslo Stock Exchange. With intuitive categorization and search capabilities, users can effortlessly navigate through a comprehensive listing, ensuring they find the information they need efficiently.`,
    images: ['/tjuvholmen/reports-page.png', '/tjuvholmen/report-page.png'],
  },
  {
    id: 3,
    title: 'Report Editor',
    desc: `Tjuvholmen's Report Editor empowers users to tailor stock analyses to their specific needs. The user-friendly interface allows for easy customization, editing, and annotation of reports. Whether users want to highlight key insights, add personal notes, or extract specific data, the Report Editor ensures a flexible and personalized analysis experience.`,
    images: ['/tjuvholmen/report-editor.png'],
  },
  {
    id: 3,
    title: 'Admin Dashboard',
    desc: `The Admin Dashboard serves as the command center for Tjuvholmen, offering robust tools for efficient platform management. In terms of report management, administrators can effortlessly upload, organize, and monitor stock reports. User management functionalities facilitate simple user creation, authentication, and control over access levels. Database management tools ensure the platform operates optimally, while analytics features provide valuable insights by tracking download and view counts, contributing to informed decision-making for the platform's growth and user engagement.`,
    images: [
      '/tjuvholmen/dashboard.png',
      '/tjuvholmen/reports-listing.png',
      '/tjuvholmen/user-panel.png',
    ],
  },
];

export default Tjuvholmen;
