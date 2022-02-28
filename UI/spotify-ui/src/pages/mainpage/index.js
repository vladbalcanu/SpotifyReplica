import { Box, Button, Menu, MenuItem, Select, Typography } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusic from '@mui/icons-material/LibraryMusic';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TvIcon from '@mui/icons-material/Tv';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import background from '../../Images/mainpage.jpg';
import MediaControlCard from '../../components/mediacontrolcard';
import SidePanel from '../../components/sidepanel';
import Drawer from '@mui/material/Drawer';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PeopleIcon from '@mui/icons-material/People';


export function MainPage() {
    const [state, setState] = useState(false)

    const toggleDrawer = (open) => (event) => {
        setState(open);
        console.log(state);
    };
    return (
        <Box sx={{ display: "flex" }}>
              <Drawer
                    anchor="left"
                    open={state}
                    onClose={toggleDrawer(false)}
                >
                    <SidePanel
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}>
                    </SidePanel>
                </Drawer>

            <Box sx={{ backgroundImage: `url(${background})`, width: "100%", height: 857 }}>
               

                <Button variant="contained" startIcon={<UnfoldMoreIcon />} onClick={toggleDrawer(true)} sx={{borderRadius:10,
                    width: 'auto', backgroundColor: "black",
                    display: "inline-block",marginLeft:80,marginTop:5, ":hover": { boxShadow: 6, backgroundColor: "#32a852" }
                }}>
                    More
                </Button>
                <Button variant="contained" startIcon={<HomeIcon />} sx={{borderRadius:10,
                    width: 'auto',  backgroundColor: "black",
                    display: "inline-block",marginTop:5, ":hover": { boxShadow: 6, backgroundColor: "#32a852" }
                }}>
                    Home
                </Button>
                <Button variant="contained" startIcon={<SearchIcon />} sx={{borderRadius:10,
                    width: 'auto', backgroundColor: "black",
                    display: "inline-block",marginTop:5, ":hover": { boxShadow: 6, backgroundColor: "#32a852" }
                }}>
                    Search
                </Button>
                <Button variant="contained" startIcon={<LibraryMusic />} sx={{borderRadius:10,
                    width: 'auto', backgroundColor: "black",
                    display: "inline-block",marginTop:5, ":hover": { boxShadow: 6, backgroundColor: "#32a852" }
                }}>
                    Your Library
                </Button>
                <Button variant="contained" startIcon={<PeopleIcon />} sx={{borderRadius:10,
                    width: 'auto', backgroundColor: "black",
                    display: "inline-block",marginTop:5, ":hover": { boxShadow: 6, backgroundColor: "#32a852" }
                }}>
                    Friends
                </Button>

                <Typography sx={{ fontSize: 36, color: "white", position: "relative", fontWeight: "Bold", marginLeft: 3, marginTop: 10 }}>
                    Good Afternoon
                </Typography>
              
            </Box>
            <Box>

            </Box>

            <Box sx={{ position: "fixed", marginTop: 80, marginLeft: 100 }}><MediaControlCard /></Box>



        </Box>

    )


}