import { CardContent, Typography, Chip, Box } from '@mui/material';
import Marquee from 'react-fast-marquee';

const softSkills = ['Comunicación', 'Trabajo en equipo', 'Trabajo bajo presión', 'Rapido Aprendizaje', 'Responsabilidad', 'Dedicación', 'Liderazgo'];
const hardSkills = ['React', 'JavaScript', 'Material UI', 'Node.js'];

function CarouselRow({ items, color, speed = 40 }) {
  return (
    <Marquee gradient={false} speed={speed} pauseOnHover style={{ width: '100%', marginBottom: 16 }}>
      {items.concat(items).map((skill, idx) => (
        <Chip
          key={skill + idx}
          label={skill}
          color={color}
          sx={{ fontSize: 18, px: 3, py: 2, mx: 1 }}
        />
      ))}
    </Marquee>
  );
}

export default function Skills() {
  return (
    <Box sx={{ width: '100vw', background: 'none', py: 4, mb: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ width: '100%', maxWidth: 1200 }}>
        <Typography variant="h6" gutterBottom align="center">
          Habilidades Blandas
        </Typography>
        <CarouselRow items={softSkills} color="primary" speed={40} />
        <Typography variant="h6" gutterBottom align="center">
          Habilidades Profesionales
        </Typography>
        <CarouselRow items={hardSkills} color="secondary" speed={40} />
      </Box>
    </Box>
  );
}
