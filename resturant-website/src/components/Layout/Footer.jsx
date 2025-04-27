import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box sx={{ textAlign: 'center', bgcolor: '#1A1A19', color: 'white', p: 3 }}>
        <Box sx={{my:3,"& svg":{fontSize:'40px',cursor:'pointer',mr:2},'& svg:hover':{color:'goldenrod',transform:'translate(5px)',transition:"all 400ms"}}}>
         <InstagramIcon/>
         <TwitterIcon/>
         <GitHubIcon/>
         <YouTubeIcon/>
        </Box>
      <Typography
        variant="h6"
        sx={{
          fontSize: '1.25rem',
          [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
          },
        }}
      >
        All Rights Reserved &copy; Tejaswini
      </Typography>
    </Box>
  );
};

export default Footer;
