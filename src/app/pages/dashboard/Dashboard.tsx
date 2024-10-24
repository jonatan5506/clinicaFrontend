import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

//UTILS
import { Outlet } from "react-router-dom";

//COMPONENTES
import { OpcoesDashboard } from "./components/OpcoesDashboard";
import { OpcaoSairDashboard } from "./components/OpcaoSairDashboard";

const drawerWidth = 200;/*Altera a largura do Drawes */

export function Dashboard() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#213963" /*Background Navbar*/
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Sistema de Clínicas
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box"
          }
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <OpcoesDashboard></OpcoesDashboard>
          <Divider />
          <OpcaoSairDashboard></OpcaoSairDashboard>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1,  m: 0, p: 0 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
