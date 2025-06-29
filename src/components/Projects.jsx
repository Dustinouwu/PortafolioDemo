import { Card, CardContent, Typography, Box } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import WorkIcon from '@mui/icons-material/Work';

const projects = [
  {
    title: 'Plux - Filial de Corporación La Favorita',
    description: 'Desarrollador Móvil',
    period: '2024 - Presente'
  },
  {
    title: 'Aneta - Automóvil Club del Ecuador',
    description: 'Pasante de Desarrollo Full Stack - Desarrollador Móvil',
    period: '2023 - 2024'
  },
  {
    title: 'Centro Ecuatoriano de Eficiencia de Recursos',
    description: 'Desarrollador FullStack',
    period: '2022 - 2023'
  },
  {
    title: 'TAO TECHIDEAS',
    description: 'Pasante de Desarrollo Full Stack',
    period: '2021 - 2022'
  }
];

export default function Projects() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
      <Card sx={{ width: { xs: '100%', sm: 600 }, p: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom align="center">
            Experiencia Laboral
          </Typography>
          <Timeline position="alternate">
            {projects.map((project, idx) => (
              <TimelineItem key={project.title + idx}>
                <TimelineOppositeContent color="text.secondary" sx={{ flex: 0.18, fontWeight: 600, minWidth: 90 }}>
                  {project.period}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" sx={{ boxShadow: 3, p: 1.2 }}>
                    <WorkIcon fontSize="small" />
                  </TimelineDot>
                  {idx < projects.length - 1 && <TimelineConnector sx={{ minHeight: 40 }} />}
                </TimelineSeparator>
                <TimelineContent sx={{ mb: 3, mt: 1 }}>
                  <Card elevation={3} sx={{ px: 2, py: 1.5, borderRadius: 3, bgcolor: 'background.paper', minWidth: 220 }}>
                    <Typography variant="subtitle1" fontWeight={600} gutterBottom>{project.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{project.description}</Typography>
                  </Card>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </CardContent>
      </Card>
    </Box>
  );
}
