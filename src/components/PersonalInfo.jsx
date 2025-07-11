import { CardContent, Avatar, Typography, Grid, Paper } from '@mui/material';

export default function PersonalInfo() {
  return (
    <Paper elevation={0} sx={{ maxWidth: 400, margin: 'auto', mt: 4, boxShadow: 'none', background: 'none' }}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar
              alt="Foto de perfil"
              src="https://avatars.githubusercontent.com/u/74982150?s=400&u=0412092bef7c0ddc45d68358b2aacfc9d61685d3&v=4" // Cambia esta URL por tu foto
              sx={{ width: 160, height: 160 }}
            />
          </Grid>
          <Grid item xs>
            <Typography variant="h5" component="div">
              Dastin Chávez
            </Typography>
            <Typography color="text.secondary">
              dastchavez22@gmail.com
            </Typography>
            <Typography color="text.secondary">
              Quito, Ecuador
            </Typography>
            <Typography color="text.secondary" data-testid="telefono">
              0999999999
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Paper>
  );
}
