import React from "react";
import '../styles/style.css'
import { Container, Typography, TextField, Button } from '@mui/material';
function Contact() {
    return(
        <div>
            <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Contacto
      </Typography>
      <form>
        <TextField
          label="Nombre"
          fullWidth
          margin="normal"
          required
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