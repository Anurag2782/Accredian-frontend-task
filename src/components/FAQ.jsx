// src/components/FAQ.jsx
import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const tabData = [
    { label: "Eligibility", color: "blue" },
    { label: "How To Use?", color: "green" },
    { label: "Terms & Conditions", color: "purple" }
  ];

  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Frequently Asked <span style={{ color: 'blue' }}>Questions</span>
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        {tabData.map((tab, index) => (
          <Button
            key={index}
            variant={tabIndex === index ? "contained" : "outlined"}
            color="primary"
            onClick={() => setTabIndex(index)}
            sx={{ mx: 1, py: 1.5, px: 3 }}
          >
            {tab.label}
          </Button>
        ))}
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Accordion expanded={tabIndex === 0} sx={{ my: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color="blue">Do I need to have prior Product Management and Project Management experience to enroll in the program?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={tabIndex === 1} sx={{ my: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color="green">What is the minimum system configuration required?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Basic system requirements include a stable internet connection, a computer with a modern web browser, and the ability to run video conferencing software.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={tabIndex === 2} sx={{ my: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color="purple">What are the terms and conditions?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Please refer to our terms and conditions page for detailed information about our policies and guidelines.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default FAQ;
