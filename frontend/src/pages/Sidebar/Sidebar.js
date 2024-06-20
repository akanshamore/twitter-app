
import React, { useState } from "react";
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOptions from "./SidebarOptions";
import { Divider, Icon, IconButton, ListItemIcon, Menu, MenuItem } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MoreIcon from '@mui/icons-material/More';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DoneIcon from '@mui/icons-material/Done';
import ListIcon from '@mui/icons-material/List';
import { Avatar, Button } from '@mui/material';
import CustomLink from './CustomLink';

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
            <CustomLink to='/home/feed'>
                <SidebarOptions active Icon={HomeIcon} text="Home" />
            </CustomLink>
            <CustomLink to='/home/explore'>
                <SidebarOptions Icon={SearchIcon} text="Explore" />
            </CustomLink>
            <CustomLink to='/home/notifications'>
                <SidebarOptions Icon={NotificationsNoneIcon} text="Notifications" />
            </CustomLink>
            <CustomLink to='/home/messages'>
                <SidebarOptions Icon={MailOutlineIcon} text="Messages" />
            </CustomLink>
            <CustomLink to='/home/bookmarks'>
                <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks" />
            </CustomLink>
            <CustomLink to='/home/lists'>
                <SidebarOptions Icon={ListAltIcon} text="Lists" />
            </CustomLink>
            <CustomLink to='/home/profile'>
                <SidebarOptions Icon={PermIdentityIcon} text="Profile" />
            </CustomLink>
            <CustomLink to='/home/more'>
                <SidebarOptions Icon={MoreIcon} text="More" />
            </CustomLink>

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