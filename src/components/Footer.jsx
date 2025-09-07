import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        p: 2,
        textAlign: "center",
        background: "#f5f5f5",
        borderTop: "1px solid #ddd",
        mt: 4,
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © 2025 🚀 Mi App Profesional | Creado con ❤️ y React + MUI
      </Typography>
    </Box>
  );
}
