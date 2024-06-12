
import React, { useState } from "react";
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOptions from "./SidebarOptions";
import { Icon, IconButton, ListItemIcon, Menu, MenuItem } from "@mui/material";
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

const Sidebar = () => {
    const [anchorE1, setAnchorE1] = useState(null);
    const openMenu = Boolean(anchorE1);

    const handleClick = e => {


        setAnchorE1(e.currentTarget);
    }

    const handleClose = () => {
        setAnchorE1(null);

    }
    return (

        <div className="sidebar">
            <TwitterIcon className="sidebar_twitterIcons" />
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
            <div className="profile_info">
                <Avatar src={"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"}></Avatar>
            </div>
            <div className="user-info">
                <div className="user_info-subuser_info"><h5>Akansha More</h5>
                    <h5>@Akansha12</h5></div>
                <ListItemIcon />
            </div>
            <div>
                <IconButton size="small" sx={{ ml: 2 }}
                    aria-controls={openMenu ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openMenu ? 'basic-menu' : undefined}
                    onClick={handleClick}
                >
                    <MoreHorizIcon />
                </IconButton>
                <Menu id="basic-menu" anchorEl={anchorE1} open={openMenu} onClick={handleClose} onClose={handleClose}>
                    <MenuItem className="Profile__info1" >
                        <Avatar src={"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"} />
                    </MenuItem>
                </Menu>
            </div>
        </div >
    )
}

export default Sidebar;