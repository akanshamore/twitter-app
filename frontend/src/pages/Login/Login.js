import React, { useState } from "react";
import TwitterImage from "../../assets/images/1667587711730.jpeg";
import TwitterIcon from '@mui/icons-material/Twitter';
import auth from "../../firebase.init"
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [
        signInWithEmailAndPassword,
        user,
        loading,

    ] = useSignInWithEmailAndPassword(auth);
    console.log(user);

    const handleSubmit = (e) => {

        e.preventDefault()
        // console.log("clicked")
        // console.log(email, password)
        console.log(user)
        signInWithEmailAndPassword(email, password)
    }
    return (

        <div className="login-container">
            <div className="image-container">
                <img src={TwitterImage} alt="Twitter image" />
            </div>
            <div className="form-container">
                <TwitterIcon />
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
            </div>


            <h1>This is Login page</h1>
        </div>
    )
}

export default Login;