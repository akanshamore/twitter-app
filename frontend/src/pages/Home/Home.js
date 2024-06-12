import { signOut } from "firebase/auth";
import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Feed from "../Feed/Feed";
import Widget from "../Widget/Widget";

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
            <Feed />
            <Widget />
        </div>
    )
}

export default Home;