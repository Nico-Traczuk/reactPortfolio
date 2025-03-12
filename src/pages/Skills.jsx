import React from "react";
import '../styles/style.css'
import { Container, Typography, Chip, Stack } from '@mui/material';

const skill = [ 'HTML','CSS','JavaScript','Tailwind CSS' ,'Django', 'Python', 'Vue.JS','React','Material-UI', ];
function Skills() {
    return(
        <div>
            <Container sx={{ py: 8 }}>
                <Typography variant="h4" gutterBottom>
                    Habilidades
                </Typography>
                <Stack direction="row" spacing={2} flexWrap="wrap">
                    {skill.map((skill, index) => (
                    <Chip label={skill} key={index} color="primary" />
                    ))}
                </Stack>
            </Container>
        </div>
    )

}


export default Skills