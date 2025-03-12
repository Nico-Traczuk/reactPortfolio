import React from "react";
import '../styles/style.css'
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';

const projects = [
    {
      title: 'Proyecto 1',
      description: 'Descripción del proyecto 1.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción del proyecto 2.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
  ];
function Projects() {
    return(
        <div>
            <Container sx={{ py: 8 }}>
                <Typography variant="h4" gutterBottom>
                    Proyectos
                </Typography>
                <Grid container spacing={4}>
                    {projects.map((project, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image={project.image}
                            alt={project.title}
                        />
                        <CardContent>
                            <Typography variant="h6">{project.title}</Typography>
                            <Typography variant="body2">{project.description}</Typography>
                            <Button href={project.link} color="primary">
                            Ver más
                            </Button>
                        </CardContent>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}


export default Projects