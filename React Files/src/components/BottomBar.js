import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AdbIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import { Button, Typography } from '@mui/material';

function BottomBar() {
    return (
        <div style={{ backgroundColor: "#0b0952", color: "white", padding: "60px 60px 30px 60px" }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item lg={4} xs={12}>
                        <AdbIcon />
                        <span style={{ fontFamily: "monospace", fontSize: "25px", fontWeight: "bold" }} > Follio</span>
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography>About</Typography>
                            <Typography>Portfolio</Typography>
                            <Typography>Blog</Typography>
                            <Typography>Contact</Typography>
                        </div>
                    </Grid>
                    <Grid item lg={4} xs={12} >
                        <div style={{ textAlign: "center", display: "flex", justifyContent: "space-evenly" }} >
                            <div style={{ borderStyle: "solid", borderRadius: "50px", padding: "10px", borderColor: "gray" }}>
                                <img src='facebook.png' alt="instagram" height={30} />
                            </div>
                            <div style={{ borderStyle: "solid", borderRadius: "50px", padding: "10px", borderColor: "gray" }}>
                                <img src='twitter.png' alt="instagram" height={30} />
                            </div>
                            <div style={{ borderStyle: "solid", borderRadius: "50px", padding: "10px", borderColor: "gray" }}>
                                <img src='instagram.png' alt="instagram" height={30} />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default BottomBar