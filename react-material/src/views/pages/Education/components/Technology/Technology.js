import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import SectionFlag from 'common/SectionFlag';
import SectionTitle from 'common/SectionTitle';
import SectionSubTitle from 'common/SectionSubTitle';

const Technology = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
       {/* Example: section flag "students" */}
      <SectionFlag>Section flag</SectionFlag>
      <SectionTitle>Section title goes here</SectionTitle>
      <SectionSubTitle>
        Section subtitle goes here
      </SectionSubTitle>

      <Grid container spacing={2}>
        <Grid
          item
          container
          justifyContent="center"
          xs={12}
          md={6}
          width="100%"
        >
          <Box height="100%" width="100%" maxWidth={600}>
            <img src="https://fakeimg.pl/600x460?text=Image+Here" width="100%" alt="" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} container alignItems="center">
          <Box marginBottom={2}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              Header text
            </Typography>
            <Typography color="text.secondary" gutterBottom>
              Description text 1
            </Typography>
            <Typography color="text.secondary" marginBottom={2}>
            Description text 2
            </Typography>
            <Button
              variant="contained"
              color="primary"
              component={LinkRouter}
              to="/systems"
              size="large"
              fullWidth={isMd ? false : true}
            >
              Button
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Technology;
