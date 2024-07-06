// src/components/CTA.jsx
import React from 'react';
import { Box, Button, Typography, Avatar } from '@mui/material';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

const CTA = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 4, my: 4, borderRadius: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box display="flex" alignItems="center">
        <Avatar sx={{ bgcolor: 'white', color: 'primary.main', mr: 2 }}>
          <HeadsetMicIcon />
        </Avatar>
        <Box>
          <Typography variant="h5" gutterBottom>
            Want to delve deeper into the program?
          </Typography>
          <Typography>
            Share your details to receive expert insights from our program team!
          </Typography>
        </Box>
      </Box>
      <Button variant="contained" sx={{ bgcolor: 'white', color: 'primary.main', borderRadius: '50px', px: 4, py: 1.5 }}>
        Get in touch
      </Button>
    </Box>
  );
};

export default CTA;
