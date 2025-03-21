import React from "react";
import '../styles/style.css'
import { Container, Typography, Chip, Stack } from '@mui/material';

const skill = [ 'HTML - Intermedio Alto','CSS - Intermedio','JavaScript - Intermedio','Tailwind CSS - Intermedio' ,'Django - Intermedio Bajo', 'Python - Intermedio Bajo', 'Vue.JS - Intermedio','React - Intermedio Bajo','Material-UI - Bajo ', 'Git-Hub', 'AI - Bajo'];
function Skills() {
    return(
        <div>
            <Container sx={{ py: 8, color:"white" }}>
                <Typography variant="h4" gutterBottom sx={{textTransform: 'uppercase', letterSpacing: '3px'}}>
                    Habilidades
                </Typography>
                <Stack direction="row" spacing={1} gap={2} flexWrap="wrap">
                    {skill.map((skill, index) => (
                    <Chip label={skill} key={index} color="secondary" size="large" />
                    ))}
                </Stack>
            </Container>
        </div>
    )

}


export default Skills