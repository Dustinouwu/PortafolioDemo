import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';

const sections = [
  { label: 'Datos Personales', id: 'personal-info' },
  { label: 'Habilidades', id: 'skills' },
  { label: 'Proyectos', id: 'projects' },
  { label: 'Lenguajes', id: 'languages' },
  { label: 'Experiencia', id: 'experience' },
];

export default function Navbar({ darkMode, onToggleTheme }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setDrawerOpen(false);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, mb: 4 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            Portafolio
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 1 }}>
            {sections.map((section) => (
              <Button
                key={section.id}
                color="inherit"
                onClick={() => handleScroll(section.id)}
              >
                {section.label}
              </Button>
            ))}
          </Box>
          <IconButton onClick={onToggleTheme} color="inherit" sx={{ ml: 1 }}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { xs: 'flex', sm: 'none' }, ml: 1 }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* Espaciador para el contenido */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 220 }} role="presentation">
          <List>
            {sections.map((section) => (
              <ListItem key={section.id} disablePadding>
                <ListItemButton onClick={() => handleScroll(section.id)}>
                  <ListItemText primary={section.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton onClick={onToggleTheme}>
                <ListItemText primary={darkMode ? 'Tema Claro' : 'Tema Oscuro'} />
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
