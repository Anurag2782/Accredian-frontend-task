// src/components/Footer.jsx
import React from 'react';
import { Box, Container, Grid, Link, Typography, IconButton, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#282828', color: 'white', py: 4 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>accredian</Typography>
            <Button variant="contained" color="primary" sx={{ mb: 2 }}>
              Schedule 1-on-1 Call Now
            </Button>
            <Typography variant="body2">
              Speak with our Learning Advisor
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>Programs</Typography>
            <Typography variant="body2"><Link href="#" color="inherit">Data Science & AI</Link></Typography>
            <Typography variant="body2"><Link href="#" color="inherit">Product Management</Link></Typography>
            <Typography variant="body2"><Link href="#" color="inherit">Business Analytics</Link></Typography>
            <Typography variant="body2"><Link href="#" color="inherit">Digital Transformation</Link></Typography>
            <Typography variant="body2"><Link href="#" color="inherit">Business Management</Link></Typography>
            <Typography variant="body2"><Link href="#" color="inherit">Project Management</Link></Typography>
            <Typography variant="body2"><Link href="#" color="inherit">Strategy & Leadership</Link></Typography>
            <Typography variant="body2"><Link href="#" color="inherit">Senior Management</Link></Typography>
            <Typography variant="body2"><Link href="#" color="inherit">Fintech</Link></Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>Contact Us</Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" gutterBottom>Email us (for Data Science Queries): <br /> admissions@accredian.com</Typography>
              <Typography variant="body2" gutterBottom>Email us (for Product Management Queries): <br /> pm@accredian.com</Typography>
              <Typography variant="body2" gutterBottom>Data Science Admission Helpline: <br /> +91 9072569322 (9 AM - 7 PM)</Typography>
              <Typography variant="body2" gutterBottom>Product Management Admission Helpline: <br /> +91 9828310195</Typography>
              <Typography variant="body2" gutterBottom>Enrolled Student Helpline: <br /> +91 7999252077</Typography>
              <Typography variant="body2" gutterBottom>Office Address: <br /> 4th Floor, 290, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>Why Accredian</Typography>
            <Typography variant="body2"><Link href="#" color="inherit">Career</Link></Typography>
            <Typography variant="body2"><Link href="#" color="inherit">Blog</Link></Typography>
            <Typography variant="body2"><Link href="#" color="inherit">Admission Policy</Link></Typography>
            <Typography variant="body2"><Link href="#" color="inherit">Referral Policy</Link></Typography>
            <Typography variant="body2"><Link href="#" color="inherit">Privacy Policy</Link></Typography>
            <Typography variant="body2"><Link href="#" color="inherit">Terms of Service</Link></Typography>
            <Typography variant="body2"><Link href="#" color="inherit">Master FAQs</Link></Typography>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <IconButton color="inherit" href="#"><FacebookIcon /></IconButton>
          <IconButton color="inherit" href="#"><LinkedInIcon /></IconButton>
          <IconButton color="inherit" href="#"><TwitterIcon /></IconButton>
          <IconButton color="inherit" href="#"><InstagramIcon /></IconButton>
          <IconButton color="inherit" href="#"><YouTubeIcon /></IconButton>
        </Box>
        <Typography variant="body2" color="gray" mt={2} textAlign="center">
          © 2024 Accredian. A Brand of FullStack Education Pvt Ltd. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
