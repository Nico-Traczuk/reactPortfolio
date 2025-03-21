import React from "react";
import '../styles/style.css'
import { Container, Typography, Grid, Paper, IconButton, Stack, Box } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material'; 

function About() {
    return(
        <div class="flex flex-col px-10 bg-white py-6 gap-5 items-center">
            <div>
                <Box>
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
                        Sobre mi
                    </Typography>
                </Box>
            </div>
            <div class="flex gap-5" >
                <Typography sx={{width: '50%'}}>
                    Soy un Desarrollador Full Stack con una fuerte orientación al Frontend. Durante los últimos dos años, he trabajado con tecnologías como <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> y <strong>Vue.js</strong>, además de utilizar <strong>Tailwind CSS</strong> como mi herramienta principal para el diseño y la estilización de interfaces.
                </Typography>

                <Typography  sx={{width: '50%'}}>
                    En el Backend, he adquirido experiencia con <strong>Python</strong> y <strong>Django</strong>, junto con conocimientos en bases de datos relacionales. Mi enfoque principal es crear aplicaciones web modernas, eficientes y con una experiencia de usuario excepcional.
                </Typography>
            </div>
            <div>
                <Box>
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
                        Motivación y objetivos
                    </Typography>
                </Box>
            </div>
            <div class="flex">
                <Typography  sx={{width: '50%'}}>
                    Lo que más me motiva es seguir aprendiendo y creciendo como profesional. Me encanta enfrentar nuevos desafíos y estar preparado para brindar soluciones efectivas en cualquier situación.
                </Typography>
            
                <Typography sx={{width: '50%'}}>
                    Mi objetivo es seguir profundizando en el desarrollo Frontend mientras amplío mis habilidades en el Backend para convertirme en un desarrollador más completo y versátil.
                </Typography>
            </div>
            <div>

            <Stack direction="row" spacing={2} mt={2}>
                <IconButton component="a" href="https://github.com/nico-traczuk" target="_blank">
                    <GitHub fontSize="large" sx={{color: 'black'}}/>
                </IconButton>
                <IconButton component="a" href="https://linkedin.com/in/nicolás-traczuk" target="_blank">
                    <LinkedIn fontSize="large" sx={{ color: "#0077b5" }} />
                </IconButton>
                <IconButton component="a" href="https://twitter.com/nicotraczuk" target="_blank">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.37 3H19.83L13.6 10.06L20.95 21H14.89L10.53 14.82L5.48 21H2L8.66 13.34L1.58 3H7.79L11.72 8.61L16.37 3ZM15.32 19.3H17.32L6.3 4.57H4.16L15.32 19.3Z"/>
                    </svg>
                </IconButton>
            </Stack>
        </div>
        </div>
    );
}

export default About
