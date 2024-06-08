import React from "react";
import TwitterImage from "../../assets/images/1667587711730.jpeg";
import TwitterIcon from '@mui/icons-material/Twitter';
const Login = () => {


    const handleSubmit = (e) => {

        e.preventDefault()
        console.log("clicked")
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
                    <input type="email" className="email" placeholder="Email Address" />
                    <input type="password" className="password" placeholder="Password" />
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