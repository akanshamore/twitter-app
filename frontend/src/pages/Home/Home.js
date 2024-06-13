import { signOut } from "firebase/auth";
import React from "react";
import Sidebar from "../Sidebar/Sidebar";

import Widget from "../Widget/Widget";
import { Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Home = () => {
    const user = useAuthState(auth)

    const handleLogout = () => {
        signOut(auth)

    }
    return (

        <div className="app">
            <Sidebar handleLogout={handleLogout} user={user} />
            <Outlet />
            <Widget />
        </div>
    )
}

export default Home;