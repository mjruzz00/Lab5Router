import { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  Paper,
  Avatar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user === "admin" && pass === "Admin123!@#") {
      navigate("/dashboard");
    } else {
      alert("❌ Credenciales incorrectas. Usa admin / Admin123!@#");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 8,
      }}
    >
      <Paper elevation={6} sx={{ p: 4, width: 350, textAlign: "center" }}>
        <Avatar sx={{ bgcolor: "#1976d2", mb: 2, mx: "auto" }}>
          <LockIcon />
        </Avatar>
        <Typography variant="h5" gutterBottom>
          Iniciar Sesión
        </Typography>
        <TextField
          label="Usuario"
          variant="outlined"
          fullWidth
          margin="normal"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <TextField
          label="Contraseña"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          sx={{ mt: 2 }}
          fullWidth
        >
          Ingresar
        </Button>
      </Paper>
    </Box>
  );
}
