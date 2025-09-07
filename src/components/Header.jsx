import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import AssessmentIcon from "@mui/icons-material/Assessment";
import LoginIcon from "@mui/icons-material/Login";

export default function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
          🚀 Mi App Profesional
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/"
          startIcon={<HomeIcon />}
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/dashboard"
          startIcon={<DashboardIcon />}
        >
          Dashboard
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/reports"
          startIcon={<AssessmentIcon />}
        >
          Reports
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/login"
          startIcon={<LoginIcon />}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}
