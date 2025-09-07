import { Box, Typography, Paper } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";

export default function Dashboard() {
  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 4 }} elevation={3}>
        <Typography variant="h4" gutterBottom>
          <DashboardIcon sx={{ mr: 1 }} /> Dashboard
        </Typography>
        <Typography>
          Aquí podrás ver estadísticas, métricas y un resumen de tu actividad.
        </Typography>
      </Paper>
    </Box>
  );
}
