import React from "react";
import './SidebarOptions.css';
import { Icon } from "@mui/material";


const SidebarOptions = ({ active, text, Icon }) => {

    return (

        <div className={`SidebarOptions ${active && 'sidebarOptions_active'}`}>
            < Icon />
            <h2>{text}</h2>


        </div >
    );
};

export default SidebarOptions;