import React from 'react';
import './Log.css';
import  sai from  './logjjss.js';
import {NavLink,Link} from "react-router-dom";

function Login(){
        return (

            
            
            <div>
    <section className="hero">
    

        <div className="bbbox">
            
            <div className="form-box">
                <div className="button-box">
                    <div id="btn"></div>
                    <button type="button" className="toggle-btn"  onClick={sai.login}>LOG-IN</button>
                    <button type="button" className="toggle-btn" onClick={sai.register}>REGISTER</button>
                </div>
                
    
                <div className="social-links">
                    <ul>
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-google"></i></a>
                    </ul>
                </div>
    
                
                <form id="login" action="" className="input-group">
                    <input type="text" placeholder="User-Id" required className="input-field " />
                    <input type="text" placeholder="Enter password" required className="input-field " />
                    <input type="checkbox"  className="chech-box" /><span>Remember password</span>
                    {/* <button type="button" className="submit-btn" onClick={<Link to="/Dash"></Link>}>Log In</button>L */}
                    <Link to="/Dash" className="submit-btn ">Log In</Link>
                </form>
    
                <form id="register" action="" className="input-group">
                    <input type="text" placeholder="User-Id" required className="input-field" />
                    <input type="text" placeholder="Email Id" required className="input-field" />
                    <input type="text" placeholder="Enter password" required className="input-field" />
                    <input type="checkbox"  className="chech-box" /><span>I agree to the terms and conditions</span>
                    <button type="submit" className="submit-btn">Register</button>
                </form>
                
                
            </div>
        </div>
    
    
       
   </section>
   </div>
   );
}

export default Login;  