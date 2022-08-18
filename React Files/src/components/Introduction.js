import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Button, Typography } from '@mui/material';

function Introduction() {
    return (
        <Box sx={{ flexGrow: 1 }} style={{ backgroundColor: "#0b0952", color: "white" }}>
            <Grid container spacing={1}>
                <Grid item xs={12} lg={5}>
                    <div style={{ marginTop: "50%", paddingLeft: "50px" }} >
                        <Typography variant='h3'>I'm  <span style={{ color: "red" }}>Mudassar</span> Raza </Typography>
                        <Typography variant="h5">MERN Stack Developer</Typography>
                        <div style={{ marginTop: "15px" }}>
                            <Button variant='outlined' color='error' href='https://www.facebook.com/Mudassar.Raza.69' target="_blank"> <FacebookIcon /></Button>
                            <span>  </span>
                            <Button variant='outlined' color='primary' href='https://www.linkedin.com/in/mudasar-raza-122918232/' target="_blank" > <LinkedInIcon /></Button>
                            <span> </span>
                            <Button variant='outlined' color="warning" href='https://www.facebook.com/Mudassar.Raza.69' target="_blank" > <InstagramIcon /></Button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} lg={7} style={{ padding: "30px" }} >
                    <img src='mudassar.jpg' alt="mudassar" width="100%" height="100%" />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Introduction