import React from "react";
import '../styles/style.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';



function Navbar() {
  return (
    <AppBar position="static"  sx={{ boxShadow: 'none', backgroundColor: '#211f99', color: 'white' }} >
      <Toolbar >
        <Typography variant="body1" sx={{flexGrow:1, textTransform: 'uppercase', letterSpacing: '3px'}}>
            Nico Traczuk
        </Typography>
        <Button color="inherit" sx={{ '&:hover': { textDecoration: 'underline'} }} >Inicio</Button>
        <Button color="inherit" sx={{ '&:hover': { textDecoration: 'underline'} }}>Acerca de</Button>
        <Button color="inherit" variant="outlined" sx={{ '&:hover': { textDecoration: 'underline'} }} >Skills</Button>
        <Button color="inherit" sx={{ '&:hover': { textDecoration: 'underline'} }}>Proyectos</Button>
        <Button color="inherit" sx={{ '&:hover': { textDecoration: 'underline'} }}>Contacto</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;