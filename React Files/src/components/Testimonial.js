import { Box, Typography } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid';

function Testimonial() {
    return (
        <div style={{ backgroundColor: "#131d5b", color: "white", padding: "50px" }} >
            <Typography variant='h2' > <Box sx={{ fontWeight: 'bold' }}>Testimonial</Box></Typography>
            <div style={{ marginTop: "70px", padding: "50px" }}>
                <Typography variant='h6' >
                    In this world where there is so much compitition, you have to struggle so hard and fast. This is just not done
                    here yet, there are numerous technologies that are developing and evolving so rapidly. If you are stick on one
                    technology you might loose this battle alone. So Hurry up and stand for yourself
                </Typography>
                <div style={{ marginTop: "20px" }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} lg={1}>
                                <img src='mudassar.jpg' alt="Mudassar" height="80px" width="80px" />
                            </Grid>
                            <Grid item xs={12} lg={11}>
                                <Typography variant="h4" sx={{ color: "red", fontWeight: "bold", fontSize: "25px" }} > Mudassar Raza</Typography>
                                <span style={{ fontStyle: "italic" }} >CEO of GameTrain</span>
                            </Grid>
                        </Grid>
                    </Box>
                </div>

            </div>
        </div>
    )
}

export default Testimonial