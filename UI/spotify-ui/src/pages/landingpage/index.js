import * as React from 'react';
import Box from '@mui/material/Box';
import { Avatar, Button, Paper, Typography } from '@mui/material';
import rocky from '../../Images/rocky.jpg'
import drake from '../../Images/drake.jpg'
import background from '../../Images/background.jpg'
import maluma from '../../Images/maluma.jpg'
import rihanna from '../../Images/rihanna.jpg'
import ariana from '../../Images/rariana.jpg'
import ozuna from '../../Images/ozuna.jpg'
import eminem from '../../Images/eminem.jpg'
import spotify from "../../Images/spotify.jpg"
import imagine from '../../Images/imagine.jpg'
import logo from '../../Images/spotifyLogo.jpg'
import { useEffect, useState} from 'react';
import useFetch from 'react-fetch-hook'


export function LandingPage() {
    

    return (
        <Box sx={{ display: "flex", bgcolor: 'black',height: 857  }}>
            <Box sx={{ display: "block", marginTop: 0, width: 850}}>
                <Typography sx={{fontSize: 55, fontWeight: "bold", color: 'white', marginLeft: 37,marginTop:15 }}>
                    Music for
                </Typography>
                <Typography sx={{ fontSize: 55, fontWeight: "bold", color: 'white', marginLeft: 37 }}>
                    everyone.
                </Typography>
                <Typography sx={{ fontSize: 16, color: '#8c8c8c', marginLeft: 35 }}>
                    Millions of songs. No credit card needed.
                </Typography>
                <Button variant="contained"
                    sx={{
                        bgcolor: "#00cc66",
                        color: '#0f1f3d',
                        marginLeft: 37,
                        marginTop: 5,
                        borderRadius: 50,
                        fontSize: 18,
                        fontWeight: "bold",
                        height: 60,
                        width: 240
                    }}>
                    GET SPOTIFY FREE
                </Button>
                <Typography sx={{fontSize:40,color: 'white',marginTop:15,marginLeft:18, fontWeight:'bold'}}>
                Try Premium free for 1 month.
                </Typography>
                <Typography sx={{fontSize:20,color: '#8c8c8c',marginTop:1,marginLeft:21, fontWeight:'bold'}}>
                Play millions of songs ad-free, on-demand, and offline.
                </Typography>
                <Button variant="contained"
                    sx={{
                        bgcolor: "white",
                        color: '#0f1f3d',
                        marginLeft: 37,
                        marginTop: 5,
                        borderRadius: 50,
                        fontSize: 18,
                        fontWeight: "bold",
                        height: 60,
                        width: 240
                    }}>
                    SEE PRICING
                </Button>
            </Box>
            <Box sx={{backgroundImage: `url(${background})`, width:1200, height: 800 }}>
                <Avatar src={drake} sx={{ width: 140, height: 140, position: "absolute", marginLeft:60,marginTop: 5 }}>
                </Avatar>
                <Avatar src={rocky} sx={{ width: 80, height: 80}}>
                </Avatar>
                <Avatar src={maluma} sx={{ width: 120, height: 120, position: "absolute", marginLeft:100,marginTop: 5  }}>
                </Avatar>
                <Avatar src={rihanna} sx={{ width: 120, height: 120, position: "absolute", marginLeft:5,marginTop: 10   }}>
                </Avatar>
                <Avatar src={ariana} sx={{ width: 160, height: 160, position: "absolute", marginLeft:32,marginTop: 15,boxShadow:100   }}>
                </Avatar>
                <Avatar src={ozuna} sx={{ width: 140, height: 140, position: "absolute", marginLeft:75,marginTop: 13   }}>
                </Avatar>
                <Avatar src={eminem} sx={{ width: 100, height: 100, position: "absolute", marginLeft:20 }}>
                </Avatar>
                <Avatar src={imagine} sx={{ width: 180, height: 180, position: "absolute", marginLeft:100,marginTop:30 }}>
                </Avatar>
                <Avatar src={spotify} sx={{width:160, height:160,position:"absolute",
                marginLeft:55,marginTop:37,boxShadow:100}}>
                </Avatar>
                
                <Typography sx={{position:"absolute",fontSize:40,color: "white",
                marginLeft:48,marginTop:57,boxShadow:50,fontWeight:'bold'}}> Spotify Music</Typography>
                <Typography sx={{position:"absolute",fontSize:20,color: "white",
                marginLeft:53,marginTop:64,boxShadow:50,color:"#8c8c8c"}}> Music for everyone</Typography>
                <Typography sx={{position:"absolute",fontSize:28,color: "white",
                marginLeft:54,marginTop:69,boxShadow:50,color:"white",fontWeight:'bold'}}>$8.99</Typography>
                <Typography sx={{position:"absolute",fontSize:20,color: "white",
                marginLeft:65,marginTop:70,boxShadow:50,color:"white"}}> / month</Typography>
            </Box>
            

        </Box>
    )
}