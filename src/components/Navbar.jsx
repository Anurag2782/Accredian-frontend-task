// src/components/NavBar.js
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Menu,
  MenuItem,
  IconButton,
  Link
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import logo from '../assets/logo.png';

const NavBarContainer = styled(AppBar)({
  backgroundColor: '#ffffff',
  color: '#000000',
  borderBottom: '1px solid #e0e0e0',
});

const ToolbarContainer = styled(Toolbar)({
  justifyContent: 'space-between',
});

const LogoContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

const NavLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const RightLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const MenuButton = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [courseAnchorEl, setCourseAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCourseMenuClick = (event) => {
    setCourseAnchorEl(event.currentTarget);
  };

  const handleCourseMenuClose = () => {
    setCourseAnchorEl(null);
  };

  return (
    <NavBarContainer position="static">
      <Box sx={{ backgroundColor: '#e0f7fa', padding: '5px 0' }}>
        <Container>
          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            Navigate your ideal career path with tailored expert advice &nbsp;
            <Link href="#" sx={{ color: '#1976d2' }}>Contact Expert</Link>
          </Typography>
        </Container>
      </Box>
      <Container>
        <ToolbarContainer>
          <LogoContainer>
            <Typography variant="h6" component="div">
              <img src={logo} alt="Logo" style={{ height: '30px', marginRight: '10px' }} />
              
            </Typography>
          </LogoContainer>
          <NavLinks>
            <Button
              endIcon={<ArrowDropDownIcon />}
              onClick={handleCourseMenuClick}
            >
              Courses
            </Button>
            <Menu
              anchorEl={courseAnchorEl}
              open={Boolean(courseAnchorEl)}
              onClose={handleCourseMenuClose}
            >
              <MenuItem onClick={handleCourseMenuClose}>Course 1</MenuItem>
              <MenuItem onClick={handleCourseMenuClose}>Course 2</MenuItem>
              <MenuItem onClick={handleCourseMenuClose}>Course 3</MenuItem>
            </Menu>
            <Button>Refer & Earn</Button>
            <Button>Resources</Button>
            <Button>About Us</Button>
          </NavLinks>
          <RightLinks>
            <Button variant="outlined" color="primary" sx={{ marginRight: '10px' }}><Link href="https://accredian.com/login">Login</Link> </Button>
            <Button variant="contained" color="primary"><Link href="https://trial.accredian.com/">Try for free</Link></Button>
          </RightLinks>
          <MenuButton>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Courses</MenuItem>
              <MenuItem onClick={handleMenuClose}>Refer & Earn</MenuItem>
              <MenuItem onClick={handleMenuClose}>Resources</MenuItem>
              <MenuItem onClick={handleMenuClose}>About Us</MenuItem>
              <MenuItem onClick={handleMenuClose}>Login</MenuItem>
              <MenuItem onClick={handleMenuClose}>Try for free</MenuItem>
            </Menu>
          </MenuButton>
        </ToolbarContainer>
      </Container>
    </NavBarContainer>
  );
};

export default NavBar;
