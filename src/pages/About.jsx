import React from "react";
import '../styles/style.css'
import { Container, Typography, Grid, Paper } from '@mui/material';
function About() {
    return(
        <div>
             <Container sx={{ py: 8 }}>
                <Typography variant="h4" gutterBottom>
                    Sobre mí
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="body1">
                            Soy un Desarrollador Full Stack con una fuerte orientación al Frontend. Durante los últimos dos años, he trabajado con tecnologías como <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> y <strong>Vue.js</strong>, además de utilizar <strong>Tailwind CSS</strong> como mi herramienta principal para el diseño y la estilización de interfaces.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="body1">
                        En el Backend, he adquirido experiencia con <strong>Python</strong> y <strong>Django</strong>, junto con conocimientos en bases de datos relacionales. Mi enfoque principal es crear aplicaciones web modernas, eficientes y con una experiencia de usuario excepcional.
                        </Typography>
                    </Grid>
                </Grid>
                
                    <Grid  py={4} >
                        <Grid>
                            <Typography variant="h4">
                                Motivacion y objetivos
                            </Typography>
                            <Typography >
                            Lo que más me motiva es seguir aprendiendo y creciendo como profesional. Me encanta enfrentar nuevos desafíos y estar preparado para brindar soluciones efectivas en cualquier situación.
                            </Typography>
                            <Typography variant="body1">
                            Mi objetivo es seguir profundizando en el desarrollo Frontend mientras amplío mis habilidades en el Backend para convertirme en un desarrollador más completo y versátil.
                            </Typography>
                        </Grid>
                    </Grid>
                
            </Container>
        </div>
    );
}

export default About
