import React from "react";
import '../styles/style.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';



function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar >
        <Typography variant="h6" sx={{flexGrow:1}}>
            Nicolas Traczuk Portfolio
        </Typography>
        <Button color="inherit">Inicio</Button>
        <Button color="inherit">Acerca de</Button>
        <Button color="inherit" variant="outlined"  >Skills</Button>
        <Button color="inherit" >Proyectos</Button>
        <Button color="inherit">Contacto</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;