import React from "react";
import '../styles/style.css'
import { Box, Typography } from '@mui/material';
function Footer() {
    return(
        <div>
            <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 1, textAlign: 'center' }}>
                <Typography variant="body1">
                    © 2025 Nicolas Traczuk. Todos los derechos reservados.
                </Typography>
            </Box>
        </div>
    )
}


export default Footer