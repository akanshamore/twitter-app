import React, { useState } from "react";
import TwitterImage from "../../assets/images/1667587711730.jpeg";
import TwitterIcon from '@mui/icons-material/Twitter';
import auth from "../../firebase.init"
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,

    ] = useSignInWithEmailAndPassword(auth);
    console.log(user);


    const [signInWithGoogle, googleUser, googleLoading, googleError] =
        useSignInWithGoogle(auth
        );

    if (user || googleUser) {
        navigate('/');
        console.log(user)
        console.log(googleUser)

    }

    if (loading) {
        console.log("loading..");

    }

    console.log(user);

    const handleSubmit = (e) => {

        e.preventDefault()
        // console.log("clicked")
        // console.log(email, password)
        console.log(user)
        signInWithEmailAndPassword(email, password)
    }

    const handleGoogleSignIn = () => {

        signInWithGoogle();
    }
    return (

        <div className="login-container">
            <div className="image-container">
                <img className='image' src={TwitterImage} alt="Twitter image" />
            </div>
            <div className="form-container">
                <div className="form-box"><TwitterIcon style={{ color: 'skyblue' }} />
                    <h2>Happening Now</h2>

                    <form onSubmit={handleSubmit}>

                        <input type="email" className="email" placeholder="Email Address"
                            onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" className="password" placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)} />
                        <div className="btn-login">
                            <button type="submit" >Sign In</button>
                        </div>
                    </form>
                    <div className="google-button">
                        <GoogleButton
                            className="g-btn"
                            type="light"
                            onClick={handleGoogleSignIn} /></div>
                </div>
                <div>
                    Don't have an account ?
                    <Link to='/signup'
                        style={{
                            textDecoration: 'none',
                            color: "skyblue",
                            fontWeight: '600',
                            marginLeft: '5px'

                        }}>
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;