import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import banner from '../assets/banner.jpeg'

const About = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Layout>
      <Box sx={{ my: 8, mx: 'auto', maxWidth: 1000, px: 2 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', fontSize: isSmallScreen ? '2rem' : '3rem' }}
        >
          Welcome To My Restaurant
        </Typography>

        <Grid container spacing={4} alignItems="center">
        
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={banner}
              alt="Restaurant"
              sx={{ width: '100%', borderRadius: 2 }}
            />
          </Grid>

          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="body1"
              sx={{ textAlign: 'justify', lineHeight: 1.7 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. In euismod, nisi vel consectetur cursus, nisl mi
              tincidunt ligula, eu facilisis neque odio nec nisl. Suspendisse
              potenti. Proin ut orci magna. Curabitur laoreet, nunc sit amet
              malesuada feugiat, elit risus fermentum nulla, a vulputate mi est
              at augue. 
              <br />
              <br />
              Quisque non urna sapien. Pellentesque non fermentum nisl. Integer
              viverra leo sit amet diam vulputate, at commodo leo bibendum.
              Donec volutpat purus eu nulla bibendum, vel efficitur purus
              fringilla.
            </Typography>
          </Grid>
        </Grid>

        <Box mt={8}>
          <Typography
            variant="body1"
            sx={{ textAlign: 'justify', lineHeight: 1.7 }}
          >
            Our mission is to serve fresh, authentic, and delicious meals made
            with passion and the finest ingredients. Whether you're joining us
            for a family dinner or a quick lunch, we aim to provide a warm and
            welcoming experience every time. Come explore our unique flavors,
            vibrant culture, and dedication to culinary excellence.
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
};

export default About;
