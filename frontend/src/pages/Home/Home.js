import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Feed from "../Feed/Feed";
import Widget from "../Widget/Widget";

const Home = () => {

    return (

        <div className="app">
            <Sidebar />
            <Feed />
            <Widget />
        </div>
    )
}

export default Home;