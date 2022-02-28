
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import bruno from '../../Images/Bruno.jpg'

export default function MediaControlCard() {
  const theme = useTheme();
  return (
    <Card sx={{ display: 'flex' , bgcolor:"black",color:"white",boxShadow:30, borderRadius:15,width:290,maxHeight:180 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            24K Magic
          </Typography>
          <Typography variant="subtitle1" color="white" component="div">
            Bruno Mars
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1,color:"white",bgcolor:"black" }}>
          <IconButton aria-label="previous" sx={{color:"white"}}>
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause"  sx={{color:"white"}}>
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next" sx={{color:"white"}}>
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={bruno}
        alt="Live from space album cover"
      />
    </Card>
  );
}