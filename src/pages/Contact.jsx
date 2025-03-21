import React from "react";
import '../styles/style.css'
import { Container, Typography, TextField, Button } from '@mui/material';
function Contact() {
    return(
        <div>
            <Container sx={{ py: 8, color:"white" }}>
            <Typography variant="h4" gutterBottom sx={{textTransform: 'uppercase', letterSpacing: '3px', textAlign: 'center'}}>
              Contacto
            </Typography>
            <form class="bg-white p-5 rounded-3xl">
              <TextField
                label="Nombre" 
                fullWidth
                margin="normal"
                required
                sx={{ color:"white" }}
              />
              <TextField
                label="Correo electrónico"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Mensaje"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                required
              />
              <Button type="submit" variant="contained" color="primary">
                Enviar
              </Button>
            </form>
          </Container>
        </div>
    )
}


export default Contact