import React from "react";
import '../styles/style.css'
import { Container, Typography, Button, Grid } from '@mui/material';
import imagenNicolas from '../assets/img/imagen-nicolas.jpeg'
/* COMPONENTS */
import Navbar from "../components/Navbar";


function Home() {
    return (
        <div>
            <Navbar/>
            <Container sx={{ py: 8 }} >
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                  <Typography variant="h2" gutterBottom>
                    Hola, soy Nicolas Traczuk
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    Desarrollador Full Stack | Front End Developer
                  </Typography>
                  <Button variant="contained" color="primary">
                    Ver proyectos
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <img
                    src={imagenNicolas}
                    alt="foto nicolas"
                    style={{ width: '30%', borderRadius: '10%' }}
                    loading="lazy"
                  />
                </Grid>
              </Grid>
            </Container>
        </div>
    );
}


export default Home