import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import songImage from '../../Images/Bruno.jpg'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Music from 'react';


export default function SongCard() {

    return (
        <Box sx={{ width: "100%", height: 60, display: 'inline-flex', border: 1,
         borderColor: "white", backgroundColor: "black", marginTop: 30}}>
            <img
                src={songImage}
                alt="Bruno"
                loading="lazy"
                style={{
                    height: '92%',
                    margin: 2,
                    marginLeft: 30,
                }}
            />

            <Box sx={{ display: "inline", marginLeft: 1 }}>
                <Typography sx={{ fontSize: 20, fontWeight: 'Bold', color: "white" }}>24K Magic </Typography>
                <Typography sx={{ fontSize: 14, fontWeight: 'Bold', color: "white" }}>Bruno Mars
                    <Button sx={{ position: 'relative', color: "white", height: 2, width: 2, ":hover": { color: "#32a852" } }}>
                        <DownloadForOfflineIcon /></Button>
                </Typography>

            </Box>

            <Typography sx={{ fontSize: 20, fontWeight: 'Bold', color: "white", marginLeft: 50, marginTop: 1.5 }}> Album </Typography>
            <Typography sx={{ fontSize: 20, fontWeight: 'Bold', color: "white", marginLeft: 50, marginTop: 1.5 }}> Date Added </Typography>


            <Button sx={{ color: "white", height: 2, width: 2, marginLeft: 30, marginTop: 2.8, ":hover": { color: "#32a852" } }}>
                <FavoriteIcon sx={{fontSize:30}} /></Button>
            <Typography sx={{ fontSize: 16, fontWeight: 'Bold', color: "white", marginLeft: 1, marginTop: 2 }}> Duration </Typography>
            <Button sx={{ color: "white", height: 2, width: 2, marginLeft: 22, marginTop: 3, ":hover": { color: "#32a852" } }}>
                <PlayCircleIcon sx={{fontSize: 50}} /></Button>


        </Box>


    )


}