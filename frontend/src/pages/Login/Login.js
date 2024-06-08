import React, { useState } from "react";
import TwitterImage from "../../assets/images/1667587711730.jpeg";
import TwitterIcon from '@mui/icons-material/Twitter';
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = (e) => {

        e.preventDefault()
        // console.log("clicked")
        console.log(email, password)
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
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>


            <h1>This is Login page</h1>
        </div>
    )
}

export default Login;