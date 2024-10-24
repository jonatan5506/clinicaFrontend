import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PaidIcon from '@mui/icons-material/Paid';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import DescriptionIcon from '@mui/icons-material/Description';

//UTIL
import { Link } from "react-router-dom";

export const OpcoesDashboard = () => {
  return (
    <List>
      <ListItem key={1} disablePadding>
        <ListItemButton component={Link} to="/agendamento" sx={{transition: '0.6s', '&:hover':{backgroundColor:"#213963",color:'white','& .MuiListItemIcon-root':{color:'white'}}}}>
          <ListItemIcon>
            <CalendarMonthIcon />
          </ListItemIcon>
          <ListItemText primary={"Agendamento"} />
        </ListItemButton>
      </ListItem>
      <ListItem key={2} disablePadding>
        <ListItemButton component={Link} to="/cadastro" sx={{transition: '0.6s', '&:hover':{backgroundColor:"#213963",color:'white','& .MuiListItemIcon-root':{color:'white'}}}}>
          <ListItemIcon>
            <GroupAddIcon />
          </ListItemIcon>
          <ListItemText primary={"Cadastro"} />
        </ListItemButton>
      </ListItem>
      <ListItem key={3} disablePadding>
        <ListItemButton component={Link} to="/faturamento" sx={{transition: '0.6s', '&:hover':{backgroundColor:"#213963",color:'white','& .MuiListItemIcon-root':{color:'white'}}}}>
          <ListItemIcon>
            <PaidIcon />
          </ListItemIcon>
          <ListItemText primary={"Faturamento"} />
        </ListItemButton>
      </ListItem>
      <ListItem key={4} disablePadding>
        <ListItemButton component={Link} to="/pep" sx={{transition: '0.6s', '&:hover':{backgroundColor:"#213963",color:'white','& .MuiListItemIcon-root':{color:'white'}}}}>
          <ListItemIcon>
            <LocalHospitalIcon />
          </ListItemIcon>
          <ListItemText primary={"Pep"} />
        </ListItemButton>
      </ListItem>
      <ListItem key={5} disablePadding>
        <ListItemButton component={Link} to="/relatorios" sx={{transition: '0.6s', '&:hover':{backgroundColor:"#213963",color:'white','& .MuiListItemIcon-root':{color:'white'}}}}>
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary={"Relatórios"} />
        </ListItemButton>
      </ListItem>
    </List>
  );
};
