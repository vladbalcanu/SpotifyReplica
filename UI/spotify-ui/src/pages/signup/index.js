import { Avatar, Box, Button, FormControl, InputAdornment, InputLabel, TextField } from "@mui/material";
import Input from '@mui/material/Input';
import spotify from "../../Images/white.jpg"
import background from "../../Images/shades.jpg";
import { useState } from "react";
import { AccountCircleRounded } from "@material-ui/icons";
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import React from 'react';
import {Redirect} from 'react-router-dom'
import { Navigate } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import video from '../../Images/headphones.mp4'
import styles from "./video.module.css"

export function SignUpPage() {
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email,setEmail]=useState("");
    const [redirect,setRedirect]= useState(false);
    
    const handleRegister= async ()=>{
       const response = await fetch("http://localhost:8000/api/register", {
           method: 'POST',
           headers:{'Content-Type': 'application/json'},
           body: JSON.stringify({
            name,
            email,
            password
           })
       });
       setRedirect(true);
    }
    if(redirect){
        return(<Navigate to= "/signin" />);
    }


    

    return (
        <Box sx={{ backgroundImage: `url(${background})`, height: 857, width: 1920 }}>
            <video className={styles.video} loop autoPlay muted id='video'>
                <source
                    src={video}
                    type="video/mp4"
                />
            </video>
            <Avatar src={spotify} sx={{
                width: 160, height: 160, marginLeft: 110, marginTop: 5, position: 'absolute'
            }}>
            </Avatar>
            <TextField
                required
                id="filled-required"
                label="Required"
                placeholder="Phone number"
                variant="filled"
                onChange={(e) => setPhoneNumber(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <PermPhoneMsgIcon />
                        </InputAdornment>
                    ),
                }}
                sx={{ backgroundColor: "#45adc4", position: "absolute", marginTop: 30, marginLeft: 104 }}
            />
            <TextField
                required
                id="filled-required"
                label="Required"
                placeholder="username"
                variant="filled"
                onChange={(e) => setName(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircleRounded />
                        </InputAdornment>
                    ),
                }}
                sx={{ backgroundColor: "#45adc4", position: "absolute", marginTop: 40, marginLeft: 104 }}
            />
            <TextField
                required
                id="filled-required"
                label="Required"
                placeholder="Email"
                variant="filled"
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            < EmailIcon />
                        </InputAdornment>
                    ),
                }}
                sx={{ backgroundColor: "#45adc4", position: "absolute", marginTop: 50, marginLeft: 104 }}
            />
            <TextField
                required
                id="filled-required"
                label="Required"
                placeholder="Full Name"
                variant="filled"
                onChange={(e) => setFullName(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            < PersonIcon />
                        </InputAdornment>
                    ),
                }}
                sx={{ backgroundColor: "#45adc4", position: "absolute", marginTop: 60, marginLeft: 104 }}
            />
            <TextField
                required
                id="filled-required"
                label="Required"
                placeholder="Password"
                variant="filled"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            < LockIcon />
                        </InputAdornment>
                    ),
                }}
                sx={{ backgroundColor: "#45adc4", position: "absolute", marginTop: 70, marginLeft: 104 }}
            />

            <Button variant="contained"
                onClick={handleRegister}
                sx={{
                    bgcolor: "white",
                    color: '#0f1f3d',
                    marginLeft: 104,
                    marginTop: 85,
                    borderRadius: 50,
                    fontSize: 18,
                    fontWeight: "bold",
                    height: 60,
                    width: 240
                }}>
                Create Account
            </Button>

        </Box>
    )
}