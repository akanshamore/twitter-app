
import React, { useState } from "react";
import TwitterImage from "../../assets/images/1667587711730.jpeg";
import TwitterIcon from '@mui/icons-material/Twitter';
import auth from "../../firebase.init"
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useSignInWithMicrosoft } from 'react-firebase-hooks/auth'
import GoogleButton from 'react-google-button'
import { Link } from "react-router-dom";
import "./Login.css"

const SignUp = () => {
    const [userName, setUserName] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const [signInWithGoogle, googleUser, googleLoading, googleError] =
        useSignInWithGoogle(auth);

    if (user || googleUser) {

        console.log(user)
        console.log(googleUser)
    }
    if (error) {

        console.log(error.message);

    }
    if (loading) {
        console.log("loading..");

    }
    console.log(error);
    console.log(user);


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("clicked")
        console.log(email, password)

        createUserWithEmailAndPassword(email, password)
    }

    const handleGoogleSignIn = () => {

        signInWithGoogle();
    }

    return (

        <div>
            <div className="login-container">
                <div className="image-container">
                    <img src={TwitterImage} alt="Twitter image" />
                </div>
                <div className="form-container">
                    <TwitterIcon className="TwitterIcon" style={{ color: "skyblue" }} />
                    <h2 className="heading">Happening Now</h2>
                    <h3 className="heading1">Join Twitter Today</h3>

                    <form onSubmit={handleSubmit}>
                        <input
                            className="display-name"
                            type="text"
                            placeholder="@username"
                            onChange={(e) => setUserName(e.target.value)} />
                        <input
                            className="display-name"
                            type="text"
                            placeholder="EnterFull Name"
                            onChange={(e) => setName(e.target.value)} />
                        <input
                            type="email" className="email" placeholder="Email Address"
                            onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" className="password" placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)} />
                        <div className="btn-login">
                            <button type="submit" >Sign Up</button>
                        </div>
                    </form>
                    <div className="google-button">
                        <GoogleButton
                            className="g-btn"
                            type="light"
                            onClick={handleGoogleSignIn} />
                    </div>
                    <div>
                        Already  have an account ?
                        <Link to='/login'
                            style={{
                                textDecoration: 'none',
                                color: "skyblue",
                                fontWeight: '600',
                                marginLeft: '5px'

                            }}>
                            Login
                        </Link>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default SignUp;