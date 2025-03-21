import React from "react";
import '../styles/style.css'
import { Container, Typography, Chip, Stack, Box } from '@mui/material';

const skill = [ 'HTML - Intermedio Alto','CSS - Intermedio','JavaScript - Intermedio','Tailwind CSS - Intermedio','SQL - Intermedio Bajo' ,'Django - Intermedio Bajo', 'Python - Intermedio Bajo', 'Vue.JS - Intermedio','React - Intermedio Bajo','Material-UI - Bajo ', 'Git-Hub','Mobile' ,'AI - Bajo'];
function Skills() {
    return(
        <div>
            <Container sx={{ py: 8, color:"white" }}>
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
                        Skills
                    </Typography>
                </Box>
                <Stack direction="row" spacing={1} gap={2} flexWrap="wrap" justifyContent="center">
                    {skill.map((skill, index) => (
                    <Chip label={skill} key={index} color="secondary" size="large" />
                    ))}
                </Stack>
            </Container>
        </div>
    )

}


export default Skills