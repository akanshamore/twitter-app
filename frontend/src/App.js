import React from 'react';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/Login/SignUp';
import ProtectedRoute from './pages/ProtectedRoute';
import PageLoading from './pages/PageLoading';
import Feed from './pages/Feed/Feed';
import Messages from './pages/Messsages/Messages';

import Lists from './pages/Lists/Lists';
import Explore from './pages/Explore/Explore';
import Bookmarks from './pages/Bookmarks/Bookmarks';
import Profile from './pages/Profile/Profile';
import More from '@mui/icons-material/More';
import Notifications from "./pages/Notifications/Notifications";



function App() {
  return (

    <div className="app">

      <Routes>
        <Route path="/" element={<ProtectedRoute> <Home /></ProtectedRoute>} >
          <Route index element={<Feed />} />
        </Route>
        <Route path="/home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
        >
          <Route path="feed" element={<Feed />} />
          <Route path="explore" element={<Explore />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="messages" element={<Messages />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="lists" element={<Lists />} />
          <Route path="profile" element={<Profile />} />
          <Route path="more" element={<More />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

    </div>
  );
}

export default App;