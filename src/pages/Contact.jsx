import React from "react";
import '../styles/style.css'
import { Container, Typography, TextField, Button, Box } from '@mui/material';
function Contact() {
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
                        Contacto
                    </Typography>
                </Box>
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