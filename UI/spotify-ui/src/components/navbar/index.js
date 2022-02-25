import { AppBar, Avatar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import spotify from "../../Images/spotify.jpg"


export default function Navbar(){
    return (
        <Box>
            <AppBar position="sticky" sx={{bgcolor: '#060d17'}}>
                <Toolbar sx={{marginLeft:2}}>
                    <NavLink to={'/'} style={{textDecoration:'none',color: 'white', display:"inline-flex", marginLeft: 250}}>
                        <Avatar src ={spotify} sx={{width: 80, height: 80 }}/>
                        <Typography sx={{fontSize: 34, fontStyle: "oblique",marginTop:2,fontWeight: "bold" }}>
                        Spotify
                    </Typography>
                    </NavLink>
                    <NavLink to='/' style = {{textDecoration:'none', color: 'white',marginLeft: 600 ,}}>
                        <Typography sx={{}}>
                            Premium
                        </Typography>
                    </NavLink>
                    <NavLink to='/' style = {{textDecoration:'none', color: 'white',marginLeft: 100}}>
                        <Typography>
                            Download
                        </Typography>
                    </NavLink>
                    <NavLink to='/' style = {{textDecoration:'none', color: 'white',marginLeft: 100}}>
                        <Typography>
                            Help
                        </Typography>
                    </NavLink>
                    <NavLink to='/signup' style = {{textDecoration:'none', color: 'white',marginLeft: 100}}>
                        <Typography>
                            Sign in      |      Sign up
                        </Typography>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </Box>
    )
}