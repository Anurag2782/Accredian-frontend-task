// src/App.js
import React, { useState } from 'react';
import Hero from './components/Hero';
import ReferModal from './components/ReferModal';
import axios from 'axios';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import ReferralBenefits from './components/ReferalBenefits';
import HeroSection from './components/HeroSection';
import HowToRefer from './components/HowToRefer';
import Navbar from './components/Navbar';




const App = () => {
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
    <div>
      {/* <NavBar /> */}
      <Navbar />
      <HeroSection />
      <HowToRefer />
      <ReferralBenefits />
      <Hero onReferNow={handleReferNow} />
      <ReferModal open={modalOpen} onClose={handleClose} onSubmit={handleSubmit} />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;