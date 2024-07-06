// src/components/HowToRefer.js
import React, { useState } from 'react';
import { Box, Button, Typography, Container, Grid } from '@mui/material';
import axios from 'axios';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Hero from './Hero';
import ReferModal from './ReferModal';

const HowToRefer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleReferNow = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleSubmit = (data) => {
    axios.post(`https://accredian-backend-task-18ar.onrender.com/api/referrals`, data)
      .then(response => {
        console.log('Referral submitted:', response.data);
        setModalOpen(false);
      })
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          console.error('Server responded with non-2xx status:', error.response.status, error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received:', error.request);
        } else {
          // Something happened in setting up the request that triggered an error
          console.error('Error setting up the request:', error.message);
        }
        console.error('Error submitting referral:', error);
      });
  };
  
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', py: 5 }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          How Do I <span style={{ color: '#1976d2' }}>Refer?</span>
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4} textAlign="center">
            <Box
              sx={{
                width: 100,
                height: 100,
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 auto',
                boxShadow: 3,
              }}
            >
              <PersonAddIcon sx={{ fontSize: 40, color: '#1976d2' }} />
            </Box>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Submit referrals easily via our website's referral section.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} textAlign="center">
            <Box
              sx={{
                width: 100,
                height: 100,
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 auto',
                boxShadow: 3,
              }}
            >
              <AssignmentTurnedInIcon sx={{ fontSize: 40, color: '#1976d2' }} />
            </Box>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Earn rewards once your referral joins an Accredian program.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} textAlign="center">
            <Box
              sx={{
                width: 100,
                height: 100,
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 auto',
                boxShadow: 3,
              }}
            >
              <AttachMoneyIcon sx={{ fontSize: 40, color: '#1976d2' }} />
            </Box>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Both parties receive a bonus 30 days after program enrollment.
            </Typography>
          </Grid>
        </Grid>
        <Box textAlign="center" sx={{ mt: 4 }}>
          {/* <Button variant="contained" color="primary">
            Refer Now
          </Button> */}
          <Hero onReferNow={handleReferNow} />
          <ReferModal open={modalOpen} onClose={handleClose} onSubmit={handleSubmit} />
        </Box>
      </Container>
    </Box>
  );
};

export default HowToRefer;
