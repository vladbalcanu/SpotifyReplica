import { AccountCircleRounded, PermPhoneMsg } from "@material-ui/icons";
import { LockOutlined } from "@mui/icons-material";
import { Button, InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import video from "../../Images/Anim.mp4"
import styles from "./video.module.css"
import LockIcon from '@mui/icons-material/Lock';
import { Navigate } from "react-router-dom";

export function SignInPage() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const handleLogin = async () => {
        const response = await fetch("http://localhost:8000/api/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                name,
                password
            })
        });
        setRedirect(true);
    }
    if (redirect) {
        return (<Navigate to="/" />);
    }

    return (

        <Box>
            <video className={styles.video} loop autoPlay muted id='video'>
                <source
                    src={video}
                    type="video/mp4"
                />

            </video>
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
                sx={{ backgroundColor: "#45adc4", position: "absolute", marginLeft: 105, marginTop: 10 }}
            />
            <TextField
                required
                id="filled-required"
                label="Required"
                placeholder="password"
                variant="filled"
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <LockIcon />
                        </InputAdornment>
                    ),
                }}
                sx={{ backgroundColor: "#45adc4", position: "absolute", marginTop: 20, marginLeft: 105 }}
            />
            <Button variant="contained"
                onClick={handleLogin}
                sx={{
                    bgcolor: "#03fc5e",
                    color: '#0f1f3d',
                    marginLeft: 105,
                    marginTop: 70,
                    borderRadius: 50,
                    fontSize: 18,
                    fontWeight: "bold",
                    height: 60,
                    width: 240
                }}>
                Connect
            </Button>

        </Box>



    )


}