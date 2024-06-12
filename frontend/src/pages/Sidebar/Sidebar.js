
import React, { useState } from "react";
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOptions from "./SidebarOptions";
import { Divider, Icon, IconButton, ListItemIcon, Menu, MenuItem } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MoreIcon from '@mui/icons-material/More';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DoneIcon from '@mui/icons-material/Done';
import ListIcon from '@mui/icons-material/List';
import { Avatar, Button } from '@mui/material';

const Sidebar = ({ handleLogout, user }) => {
    const [AnchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(AnchorEl);

    const handleClick = e => {


        setAnchorEl(e.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);

    }
    return (

        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon" />
            <SidebarOptions active Icon={HomeIcon} text='Home' />
            <SidebarOptions active Icon={SearchIcon} text='Explore' />
            <SidebarOptions active Icon={NotificationsIcon} text='Notifications' />
            <SidebarOptions active Icon={BookmarkBorderIcon} text='Bookmarks' />
            <SidebarOptions active Icon={MailOutlineIcon} text='Messages' />
            <SidebarOptions active Icon={ListAltIcon} text='Lists' />
            <SidebarOptions active Icon={PermIdentityIcon} text='Profile' />
            <SidebarOptions active Icon={MoreIcon} text='More' />
            <Button variant="outlined" className="sidebar__tweet" fullWidth>
                Tweet
            </Button>
            <div className="Profile_info">
                <Avatar src={"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"}></Avatar>

                <div className="user_info">
                    <h5>Akansha More</h5>
                    <h5>@Akansha12</h5>
                </div>
                <IconButton size="small" sx={{ ml: 2 }}
                    aria-controls={openMenu ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openMenu ? 'basic-menu' : undefined}
                    onClick={handleClick}
                >
                    <MoreHorizIcon />

                </IconButton>
                <Menu id="basic-menu" anchorEl={AnchorEl} open={openMenu} onClick={handleClose} onClose={handleClose}>
                    <MenuItem className="Profile__info1" >
                        <Avatar src={"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"} />


                        <div className="subUser__info">
                            <div>
                                <h5>Akansha More</h5>
                                <h5>@Akansha12</h5>
                            </div>

                            <ListItemIcon className="done__icon"> <DoneIcon /></ListItemIcon>
                        </div>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>Add an existing account</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout@Akansha12</MenuItem>
                </Menu>
            </div>
        </div >
    );
};

export default Sidebar;