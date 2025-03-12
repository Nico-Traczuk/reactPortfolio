import React from "react";
import '../styles/style.css'
import { Box, Typography } from '@mui/material';
function Footer() {
    return(
        <div>
            <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 4, textAlign: 'center' }}>
                <Typography variant="body1">
                    © 2023 [Tu Nombre]. Todos los derechos reservados.
                </Typography>
            </Box>
        </div>
    )
}


export default Footer