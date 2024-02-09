import { Box } from '@mui/material';

const Section = ({ children, sx }) => {
  return (
    <Box
      component='section'
      sx={{
        width: { lg: '1200px', xs: 'auto' },
        px: 3,
        margin: 'auto',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default Section;
