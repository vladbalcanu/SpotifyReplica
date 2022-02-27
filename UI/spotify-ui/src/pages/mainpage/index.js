import { Box, Button, Menu, MenuItem } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
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
import darkScrollbar from '@mui/material/darkScrollbar';

export function MainPage() {
    const [anchorEl, setAnchorEl] = useState("");
    const open = Boolean(anchorEl);
    const handleDropDown = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <Box sx={{ display: "flex" }}>
            <Box sx={{ backgroundColor: "black", width: '12%', textAlign: 'left', position:"fixed" }}>
                <Button
                    sx={{ width: '100%', alignContent: 'left', textAlign: 'left', color: "white", ":hover": { boxShadow: 6, backgroundColor: "#32a852" } }}
                    id="settings"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-hashpopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleDropDown}
                >Settings</Button>
                <Menu sx={{ textAlign: 'left' }}
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
                <Divider sx={{ borderColor: "white" }} />
                <Button variant="contained" startIcon={<HomeIcon />} sx={{
                    width: '100%', textAlign: 'left', backgroundColor: "black",
                    display: "inline-block", ":hover": { boxShadow: 6, backgroundColor: "#32a852" }
                }}>
                    Home
                </Button>
                <Divider sx={{ borderColor: "white" }} />
                <Button variant="contained" startIcon={<SearchIcon />} sx={{
                    width: '100%', textAlign: 'left', backgroundColor: "black",
                    display: "inline-block", ":hover": { boxShadow: 6, backgroundColor: "#32a852" }
                }}>
                    Search
                </Button>
                <Divider sx={{ borderColor: "white" }} />
                <Button variant="contained" startIcon={<LibraryMusic />} sx={{
                    width: '100%', textAlign: 'left', backgroundColor: "black",
                    display: "inline-block", ":hover": { boxShadow: 6, backgroundColor: "#32a852" }
                }}>
                    Your Library
                </Button>
                <Divider sx={{ borderColor: "white" }} />
                <Button variant="contained" startIcon={<AddBoxIcon />} sx={{
                    width: '100%', textAlign: 'left', backgroundColor: "black",
                    display: "inline-block", ":hover": { boxShadow: 6, backgroundColor: "#32a852" }
                }}>
                    Create Playlist
                </Button>
                <Divider sx={{ borderColor: "white" }} />
                <Button variant="contained" startIcon={<FavoriteIcon />} sx={{
                    width: '100%', textAlign: 'left', backgroundColor: "black",
                    display: "inline-block", ":hover": { boxShadow: 6, backgroundColor: "#32a852" }
                }}>
                    Liked Songs
                </Button>
                <Divider sx={{ borderColor: "white" }} />
                <Button variant="contained" startIcon={<TvIcon />} sx={{
                    width: '100%', textAlign: 'left', backgroundColor: "black",
                    display: "inline-block", ":hover": { boxShadow: 6, backgroundColor: "#32a852" }
                }}>
                    Your Episodes
                </Button>
                <Divider sx={{ borderColor: "white" }} />

                <List
                    sx={{
                        width: '100%',
                        height: '100%',
                        maxWidth: 360,
                        bgcolor: 'black',
                        color: 'white',

                        position: 'relative',
                        overflow: 'auto',
                        maxHeight: 563,
                        '& ul': { padding: 0 },
                        scrollbarColor:'red yellow'
                    }}
                    subheader={<li />}
                >
                    {[0, 1, 2, 3, 4].map((sectionId) => (
                        <li key={`section-${sectionId}`}>
                            <ul>
                                {[0, 1, 2].map((item) => (
                                    <ListItem key={`Playlist-${sectionId}-${item}`}
                                        secondaryAction={<IconButton>
                                            <PlayCircleIcon
                                                sx={{ bgColor: "white", color: "white",":hover":{color:"#32a852"} }} />
                                        </IconButton>}>
                                        <ListItemText primary={`Playlist ${item}`} />
                                    </ListItem>
                                ))}
                            </ul>
                        </li>
                    ))}
                </List>


            </Box>
            <Box>

            </Box>
            <Box>

            </Box>



        </Box>
    )


}