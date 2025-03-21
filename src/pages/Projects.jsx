import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button, Chip, Box } from '@mui/material';
import benitosLanding from '../assets/img/benitoslanding.png'
import benitosSistema from '../assets/img/benitossistema.png'
import apiLanding from '../assets/img/apilanding.png'
import veteCrud from '../assets/img/vetecrud.png'
import aleliLanding from '../assets/img/alelilanding.png'

const projects = [
  {
    title: 'Carniceria Benitos - Sistema',
    description: 'Sistema de gestión para carnicería Benitos.',
    image: benitosSistema,
    link: 'http://granjasbenitos.ddns.net:8735/',
    technologies: ['Django', 'Tailwind', 'SQL Server'], // Tecnologías usadas
  },
  {
    title: 'Carniceria Benitos Landing',
    description: 'Landing page para carnicería Benitos.',
    image: benitosLanding,
    link: 'https://granjabenitos-o9gqkwfc8-nicolas-traczuks-projects.vercel.app/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'], // Tecnologías usadas
  },
  {
    title: 'Landing Aleli',
    description: 'Landing page para Aleli Natural Cosmetica.',
    image: aleliLanding,
    link: 'https://alelinatural.cl/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Shopify'], // Tecnologías usadas
  },
  {
    title: 'Proyecto Cripto Api', 
    description: 'Api de Crypto.',
    image: apiLanding,
    link: 'https://api-criptomonedas-nico-traczuk.netlify.app/',
    technologies: ['HTML', 'CSS', 'Javascript', 'API'], // Tecnologías usadas
  },
  {
    title: 'Turnos Veterinaria', 
    description: 'CRUD de Veterinaria.',
    image: veteCrud,
    link: 'https://citas-nicolas-traczuk.netlify.app/',
    technologies: ['HTML', 'CSS', 'Javascript', 'API'], // Tecnologías usadas
  }
];

function Projects() {
  return (
    <Container sx={{ py: 8, color: 'white' }}>
            <Box sx={{ mb: 4, textAlign: "center" }}>
                    <Typography
                        variant="h4"
                        sx={{
                            textTransform: "uppercase",
                            fontWeight: "bold",
                            letterSpacing: "3px",
                            position: "relative",
                            display: "inline-block",
                            "&::after": {
                                content: '""',
                                position: "absolute",
                                left: 0,
                                bottom: "-5px",
                                width: "0%",
                                height: "3px",
                                backgroundColor: "#0077b5", // Cambia el color aquí
                                transition: "width 0.3s ease-in-out",
                            },
                            "&:hover::after": {
                                width: "100%",
                            },
                        }}
                    >
                        Proyectos
                    </Typography>
                </Box>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{padding:'10px', maxHeight:'350px', boxShadow: '0 4px 6px rgba(255, 255, 255, 0.2)' }}>
              {/* Contenedor relativo para la imagen y los chips */}
              <Box position="relative">
                <CardMedia
                  component="img"
                  height="140"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    objectFit: 'cover',
                    maxHeight: '130px',
                    borderRadius: '5px',
                    boxShadow: '0 4px 4px rgba(0, 0, 0, 0.7)',
                    '&:hover': {
                      transition: 'all 0.3s ease-in-out',
                      boxShadow: '0 8px 8px rgba(0, 0, 0, 0.9)',
                      transform: 'translateY(-5px)',
                    },
                    '&:not(:hover)': {
                      transition: 'all 0.3s ease-out',
                    },
                  }}
                />
                {/* Chips de tecnologías */}
                <Box
                  
                  bottom={8} // Distancia desde la parte inferior
                  left={8}   // Distancia desde la izquierda
                  display="flex"
                  gap={1}    // Espacio entre los chips
                  paddingTop={1}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <Chip
                      key={techIndex}
                      label={tech}
                      color="primary"
                      size="small"
                      sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', fontSize: '.9rem', margin: '5px auto',  }} // Estilo personalizado
                    />
                  ))}
                </Box>
              </Box>
              <CardContent>
                <Typography variant="body1" sx={{ textTransform: 'uppercase', fontWeight: 'bold', marginBottom: 1 }}>{project.title}</Typography>
                <Typography variant="body2">{project.description}</Typography>
                <Button 
                  href={project.link} 
                  target='_blank'
                  color="primary" 
                  sx={{ mt: 2, border: '2px solid rgba(0, 0, 0, 0.4)' ,'&:hover': {  backgroundColor: 'rgba(0, 0, 0, 0.4)', color: 'white' } }}
                >
                  Ver más
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;