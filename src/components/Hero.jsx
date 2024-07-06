// src/components/Hero.js
import React from 'react';
import { Button, Container, Typography } from '@mui/material';

const Hero = ({ onReferNow }) => (
  <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
    {/* <Typography variant="h2">Refer & Earn</Typography> */}
    <Button variant="contained" color="primary" onClick={onReferNow} style={{ marginTop: '20px' }}>
      Refer Now
    </Button>
  </Container>
);

export default Hero;
