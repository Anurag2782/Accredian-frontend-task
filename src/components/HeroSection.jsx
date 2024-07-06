// src/components/HeroSection.js
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Tabs,
  Tab,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import image from '../assets/image.png'

const PREFIX = 'HeroSection';
const classes = {
  appBar: `${PREFIX}-appBar`,
  logo: `${PREFIX}-logo`,
  toolbar: `${PREFIX}-toolbar`,
  heroContainer: `${PREFIX}-heroContainer`,
  heroText: `${PREFIX}-heroText`,
  heroImage: `${PREFIX}-heroImage`,
  navTabs: `${PREFIX}-navTabs`,
  navTab: `${PREFIX}-navTab`,
};

const Root = styled('div')(({ theme }) => ({
  [`& .${classes.appBar}`]: {
    backgroundColor: '#fff',
    boxShadow: 'none',
    borderBottom: '1px solid #e0e0e0',
  },
  [`& .${classes.logo}`]: {
    flexGrow: 1,
  },
  [`& .${classes.toolbar}`]: {
    justifyContent: 'space-between',
  },
  [`& .${classes.heroContainer}`]: {
    marginTop: '20px',
  },
  [`& .${classes.heroText}`]: {
    fontWeight: 'bold',
  },
  [`& .${classes.heroImage}`]: {
    maxWidth: '100%',
  },
  [`& .${classes.navTabs}`]: {
    justifyContent: 'center',
  },
  [`& .${classes.navTab}`]: {
    minWidth: '100px',
  },
}));

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleReferNow = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleSubmit = (data) => {
    axios.post('/api/referrals', data)
      .then(response => {
        console.log('Referral submitted:', response.data);
        setModalOpen(false);
      })
      .catch(error => {
        console.error('Error submitting referral:', error);
      });
  };
  return (
    <Root>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.logo}>
            accredian
          </Typography>
          <Box>
            <Button color="inherit">Courses</Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Tabs className={classes.navTabs} centered>
        <Tab label="Refer" className={classes.navTab} />
        <Tab label="Benefits" className={classes.navTab} />
        <Tab label="FAQs" className={classes.navTab} />
        <Tab label="Support" className={classes.navTab} />
      </Tabs>

      <Container maxWidth="lg" className={classes.heroContainer}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" className={classes.heroText}>
              Let's Learn & Earn
            </Typography>
            <Typography variant="h6" color="textSecondary" paragraph>
              Get a chance to win up to Rs. 15,000
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Refer Now
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box position="relative">
              <img
                src={image} // Replace with the actual image source
                alt="Hero"
                className={classes.heroImage}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Root>
  );
};

export default HeroSection;
