import { AppBar, Avatar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import spotify from "../../Images/spotify.jpg"
import {logout} from '../../features/auth/auth-slice'
import { useDispatch } from "react-redux";


export default function Navbar() {
    const isAuth = useSelector((state) => state.auth.value)
    const dispatch = useDispatch();
    console.log("Aici avem isAuth")
    console.log(isAuth);
    

    const  handleLogout = async () =>{ 
        await fetch("http://localhost:8000/api/logout", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
    });
    dispatch(logout());
    }
    return (
        <Box>
            <AppBar position="sticky" sx={{ bgcolor: '#060d17' }}>
                <Toolbar sx={{ marginLeft: 2 }}>
                    <NavLink to={'/'} style={{ textDecoration: 'none', color: 'white', display: "inline-flex", marginLeft: 250 }}>
                        <Avatar src={spotify} sx={{ width: 80, height: 80 }} />
                        <Typography sx={{ fontSize: 34, fontStyle: "oblique", marginTop: 2, fontWeight: "bold" }}>
                            Spotify
                        </Typography>
                    </NavLink>
                    <NavLink to='/' style={{ textDecoration: 'none', color: 'white', marginLeft: 600, }}>
                        <Typography sx={{}}>
                            Premium
                        </Typography>
                    </NavLink>
                    <NavLink to='/' style={{ textDecoration: 'none', color: 'white', marginLeft: 100 }}>
                        <Typography>
                            Download
                        </Typography>
                    </NavLink>
                    <NavLink to='/' style={{ textDecoration: 'none', color: 'white', marginLeft: 100 }}>
                        <Typography>
                            Help
                        </Typography>
                    </NavLink>
                    
                    {!isAuth && (
                    <NavLink to='/signin' style = {{textDecoration:'none', color: 'white',marginLeft: 100}}>
                    <Typography>
                        Sign in
                    </Typography>
                </NavLink>
                )}
                 {!isAuth && ( <NavLink to='/signup' style = {{textDecoration:'none', color: 'white',marginLeft: 100}}>
                    <Typography>
                        Sign up
                    </Typography>
                    
                </NavLink>
                )}
                
                {isAuth && (
                    <NavLink to='/' onClick={handleLogout} style = {{textDecoration:'none', color: 'white',marginLeft: 100}}>
                    <Typography>
                        Logout
                    </Typography>
                </NavLink>)}
                

                </Toolbar>
            </AppBar>
        </Box>
    )
}