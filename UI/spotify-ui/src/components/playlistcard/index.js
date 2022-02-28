import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from '../../Images/maluma.jpg'
import GradeIcon from '@mui/icons-material/Grade';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddBoxIcon from '@mui/icons-material/AddBox';

export default function PlayListCard() {
  return (
    <Card color="black" sx={{ maxWidth: 230,maxHeight:230, backgroundColor:"black",color:"black",boxShadow:30,borderRadius:6 }}>
      <CardMedia
        component="img"
        height="120"
        image={logo}
        alt="Maluma"
        sx={{backgroundColor:"black"}}
      />
        <Typography sx={{color:"white",fontWeight:"bold",fontSize:24,marginLeft:2,marginTop:2}}>
          This is Maluma
        </Typography>
      <CardActions sx={{backgroundColor:'black',paddingLeft:5}}>
        <Button size="large" sx={{color:"white"}}><AddBoxIcon size="large"/></Button>
        <Button size="large" sx={{color:"#f70707",marginLeft:11}}><FavoriteIcon/></Button>
      </CardActions>
    </Card>
  );
}
