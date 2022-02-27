import { AccountCircleRounded, PermPhoneMsg } from "@material-ui/icons";
import { LockOutlined } from "@mui/icons-material";
import { Button, InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import video from "../../Images/Anim.mp4"
import styles from "./video.module.css"
import LockIcon from '@mui/icons-material/Lock';
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {login} from '../../features/auth/auth-slice'
import Divider from '@mui/material/Divider';

export function SignInPage() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const dispatch = useDispatch();
    const isAuth = useSelector((state)=> state.auth.value)

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
        console.log(response.status);
        if(response.status==200){
        setRedirect(true);
        dispatch(login());
        }
        else
        setRedirect(false);
    }
    if (redirect) {
        return (<Navigate to="/mainpage" />);
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
                type="password"
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
                    width: 240,
                    bgcolor:"white",
                }}>
                Connect
            </Button>

        </Box>



    )


}