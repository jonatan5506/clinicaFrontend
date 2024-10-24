import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import { useContext } from "react";
import { AppContext } from "../../../shared/contexts/AppContext";

//UTIL
import { Link } from "react-router-dom";

export const OpcaoSairDashboard = () => {
  const {deslogar} = useContext(AppContext);
  return (
    <List>
      <ListItem key={1} disablePadding>
        <ListItemButton component={Link} to="/configuracao" sx={{transition: '0.6s', '&:hover':{backgroundColor:"#213963",color:'white','& .MuiListItemIcon-root':{color:'white'}}}}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={"Configuração"} />
        </ListItemButton>
      </ListItem>
      <ListItem key={2} disablePadding>
        <ListItemButton onClick={deslogar} sx={{transition: '0.6s', '&:hover':{backgroundColor:"#213963",color:'white','& .MuiListItemIcon-root':{color:'white'}}}}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary={"Sair"} />
        </ListItemButton>
      </ListItem>
    </List>
  );
};
