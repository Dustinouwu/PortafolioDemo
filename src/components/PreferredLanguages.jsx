import { Typography, Box } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import Marquee from 'react-fast-marquee';

const languages = [
  { name: 'JavaScript', color: '#f7df1e', text: '#222', icon: <CodeIcon /> },
  { name: 'Python', color: '#306998', text: '#fff', icon: <CodeIcon /> },
  { name: 'Java', color: '#ea2d2e', text: '#fff', icon: <CodeIcon /> },
  { name: 'C#', color: '#68217a', text: '#fff', icon: <CodeIcon /> },
  { name: 'Flutter', color: '#02569B', text: '#fff', icon: <CodeIcon /> },
];

export default function PreferredLanguages() {
  return (
    <Box sx={{ width: '100vw', background: 'none', py: 4, mb: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ width: '100%', maxWidth: 1200 }}>
        <Typography variant="h6" gutterBottom align="center">
          Lenguajes de Programación
        </Typography>
        <Marquee gradient={false} speed={40} pauseOnHover style={{ width: '100%', marginBottom: 32 }}>
          {languages.concat(languages).map((lang, idx) => (
            <Box
              key={lang.name + idx}
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: lang.color,
                color: lang.text,
                borderRadius: 3,
                px: 3,
                py: 1.5,
                fontSize: 18,
                fontWeight: 600,
                boxShadow: 2,
                minWidth: 120,
                gap: 1.5,
                mx: 1,
              }}
            >
              {lang.icon}
              {lang.name}
            </Box>
          ))}
        </Marquee>
      </Box>
    </Box>
  );
}
