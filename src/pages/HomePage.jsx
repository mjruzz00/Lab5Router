import { Box, Typography, Paper } from "@mui/material";

export default function HomePage() {
  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 4, textAlign: "center" }} elevation={4}>
        <Typography variant="h3" gutterBottom>
          🌟 Bienvenido a Mi App Profesional
        </Typography>
        <Typography variant="h6">
          Navega entre Home, Dashboard, Reports y Login usando el menú superior.
        </Typography>
      </Paper>
    </Box>
  );
}
