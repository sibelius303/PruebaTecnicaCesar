import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import ComputerIcon from '@mui/icons-material/Computer';

export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1, minWidth: "400px" }}>
            <AppBar sx={{ backgroundColor: "black" }} position="static">
                <Toolbar>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                    {/* <ComputerIcon sx={{marginRight:"30px"}}/> */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        CodearSocial
                    </Typography>

                    <Button onClick={() => navigate("/")} color="inherit">Inicio</Button>

                </Toolbar>
            </AppBar>
        </Box>
    );
};
