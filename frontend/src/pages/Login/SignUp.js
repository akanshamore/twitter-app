
import React, { useState } from "react";
import TwitterImage from "../../assets/images/1667587711730.jpeg";
import TwitterIcon from '@mui/icons-material/Twitter';
import auth from "../../firebase.init"
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'

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
    if (user) {

        console.log(user);
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
        e.preventDefault()
        // console.log("clicked")
        console.log(email, password)

        createUserWithEmailAndPassword(email, password)
    }

    return (

        <div>
            <div className="signup-container">
                <div className="image-container">
                    <img src={TwitterImage} alt="Twitter image" />
                </div>
                <div className="form-container">
                    <TwitterIcon />
                    <h2>Happening Now</h2>

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
                </div>


                <h1>This is Login page</h1>
            </div>
        </div>
    )
}

export default SignUp;