import { Box, Typography, Paper } from "@mui/material";
import AssessmentIcon from "@mui/icons-material/Assessment";

export default function Reports() {
  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 4 }} elevation={3}>
        <Typography variant="h4" gutterBottom>
          <AssessmentIcon sx={{ mr: 1 }} /> Reports
        </Typography>
        <Typography>
          Genera y consulta reportes detallados de tu información.
        </Typography>
      </Paper>
    </Box>
  );
}
