
import React from "react";
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOptions from "./SidebarOptions";
import { Icon } from "@mui/material";
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

const Sidebar = () => {

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
            <SidebarOptions active Icon={MoreHorizIcon} text='MoreHoriz' />


        </div>
    )
}

export default Sidebar;