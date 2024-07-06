import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
  Collapse,
  IconButton
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const programs = [
  {
    category: 'All Programs',
    subcategories: [
      { name: 'Product Management' },
      { name: 'Strategy & Leadership' },
      { name: 'Business Management' },
      { name: 'FinTech' },
      { name: 'Senior Management' },
      { name: 'Data Science' },
      { name: 'Digital Transformation' },
      { name: 'Business Analytics' }
    ]
  }
];

const courses = [
  { name: 'Professional Certificate Program in Product Management', referrerBonus: '₹ 7,000', refereeBonus: '₹ 9,000' },
  { name: 'PG Certificate Program in Strategic Product Management', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
  { name: 'Executive Program in Data Driven Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
  { name: 'Executive Program in Product Management and Digital Transformation', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
  { name: 'Executive Program in Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
  { name: 'Advanced Certification in Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
  { name: 'Executive Program in Product Management and Project Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' }
];

const ReferralBenefits = () => {
  const [selectedCategory, setSelectedCategory] = useState(programs[0]);
  const [enrolled, setEnrolled] = useState(false);
  const [open, setOpen] = useState(true);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleToggleEnrolled = () => {
    setEnrolled(!enrolled);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom align="center">
        What Are The <span style={{ color: '#1976d2' }}>Referral Benefits?</span>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Box sx={{ border: '1px solid #ccc', borderRadius: '8px', p: 2 }}>
            <List component="nav">
              {programs.map((program, index) => (
                <div key={index}>
                  <ListItem button onClick={handleClick}>
                    <ListItemText primary={program.category} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {program.subcategories.map((subcategory, index) => (
                        <ListItem button key={index} sx={{ pl: 4 }} onClick={() => handleCategorySelect(subcategory)}>
                          <ListItemText primary={subcategory.name} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                  <Divider />
                </div>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="body1">Enrolled</Typography>
            <Switch checked={enrolled} onChange={handleToggleEnrolled} />
          </Box>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Programs</TableCell>
                  <TableCell align="right">Referrer Bonus</TableCell>
                  <TableCell align="right">Referee Bonus</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {courses.map((course, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">{course.name}</TableCell>
                    <TableCell align="right">{course.referrerBonus}</TableCell>
                    <TableCell align="right">{course.refereeBonus}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" color="primary">Refer Now</Button>
          </Box> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ReferralBenefits;
