import React, { useState } from 'react';
import { Container, Typography, Box, CssBaseline, IconButton } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './components/Navbar';
import PersonalInfo from './components/PersonalInfo';
import Skills from './components/Skills';
import Projects from './components/Projects';
import PreferredLanguages from './components/PreferredLanguages';
import Footer from './components/Footer';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#9c27b0' },
    background: {
      default: '#e3eaf2',
      paper: '#fff',
    },
    text: {
      primary: '#222',
      secondary: '#555',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9' },
    secondary: { main: '#ce93d8' },
    background: {
      default: '#181c25',
      paper: '#23283a',
    },
    text: {
      primary: '#fff',
      secondary: '#b0b0b0',
    },
  },
});

function getSectionStyles(darkMode) {
  return [
    { backgroundColor: darkMode ? '#23283a' : '#fff' },
    { backgroundColor: darkMode ? '#23283a' : '#f3f6fa' },
    { backgroundColor: darkMode ? '#23283a' : '#fff' },
    { backgroundColor: darkMode ? '#23283a' : '#f3f6fa' },
  ];
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = darkMode ? darkTheme : lightTheme;
  const dynamicSectionStyles = getSectionStyles(darkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box minHeight="100vh" display="flex" flexDirection="column" bgcolor="background.default">
        <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode((prev) => !prev)} />
        <Box flex={1} display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100vw">
          <Box width="100%" display="flex" justifyContent="center" alignItems="center" sx={{ mt: 4, mb: 2 }}>
            <Typography variant="h3" align="center" gutterBottom flex={1}>
              Portafolio Personal
            </Typography>
          </Box>
          <Box id="personal-info" sx={{ width: '100vw', ...dynamicSectionStyles[0], mb: 3, py: { xs: 2, sm: 4 }, display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '100%', maxWidth: { xs: '100%', sm: 800 }, px: { xs: 1, sm: 2 }, display: 'flex', justifyContent: 'center' }}>
              <PersonalInfo />
            </Box>
          </Box>
          <Box id="skills" sx={{ width: '100vw', ...dynamicSectionStyles[1], mb: 3, py: { xs: 2, sm: 4 }, display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '100%', maxWidth: { xs: '100%', sm: 800 }, px: { xs: 1, sm: 2 }, display: 'flex', justifyContent: 'center' }}>
              <Skills />
            </Box>
          </Box>
          <Box id="projects" sx={{ width: '100vw', ...dynamicSectionStyles[2], mb: 3, py: { xs: 2, sm: 4 }, display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '100%', maxWidth: { xs: '100%', sm: 800 }, px: { xs: 1, sm: 2 }, display: 'flex', justifyContent: 'center' }}>
              <Projects />
            </Box>
          </Box>
          <Box id="languages" sx={{ width: '100vw', ...dynamicSectionStyles[3], mb: 3, py: { xs: 2, sm: 4 }, display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '100%', maxWidth: { xs: '100%', sm: 800 }, px: { xs: 1, sm: 2 }, display: 'flex', justifyContent: 'center' }}>
              <PreferredLanguages />
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
