import React from "react";
import '../styles/style.css'
import { Container, Typography, Button, Grid } from '@mui/material';
import imagenNicolas from '../assets/img/coding-img.svg'
/* COMPONENTS */
import Navbar from "../components/Navbar";


function Home() {
    return (
        <div>
            <Navbar/>
            <Container sx={{ py: 8, color:"white", margin:'auto' }} >
                <div class="flex items-center justify-around gap-10">
                  <div>
                    <Typography variant="h4" gutterBottom sx={{textTransform: 'uppercase'}}>
                      Hola! soy Nicolas Traczuk
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      Desarrollador Full Stack | Front End Developer
                    </Typography>
                    <Button variant="contained" color="primary">
                      Ver proyectos
                    </Button>
                  </div>
                
                  <div>
                    <img
                      src={imagenNicolas}
                      alt="foto nicolas"
                      className="w-[250px] h-[250px] rounded-full"
                    />
                  </div>
                </div>
            </Container>
        </div>
    );
}


export default Home