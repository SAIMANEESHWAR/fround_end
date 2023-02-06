import React from 'react';
import './Dash.css';
import {NavLink,Link} from "react-router-dom";
function Dashboard(){
        return (
            <div className="body1" >
            <section id="menu">
        <div className="logo">
            <img src="DashBoard.imgs/logo1.webp" alt="" />
            <h3>INTERNSALA</h3>
        </div>
        <div className="items">
        <li ><i className="fa-sharp fa-solid fa-house"></i><Link to="/">Home</Link></li> 
           <li ><i className="fa-solid fa-chart-pie"></i><a href="#">Dashboard</a></li> 
           <li ><i className="fa-solid fa-chart-pie"></i><a href="#">Applications</a></li> 
           
           <li ><i className="fa-solid fa-chart-pie"></i><a href="#">Assignment Allocation</a></li> 
           <li ><i className="fa-solid fa-chart-line"></i><a href="#">Performance Tracking</a></li> 
           <li ><i className="fa-sharp fa-solid fa-gear"></i><a href="#">Settings</a></li> 
        </div>
    </section>
    

    
    <section id="interface">
        <div className="navigation">
            <div className="n1">

                <div>
   
                    <i  id="menu-btn" class="fa-solid fa-bars"></i>
                </div>
                {/* <button id="menu-btn"><div>
                <i  className="fa-solid fa-arrow-right"></i>
                    
                </div></button> */}
                <div className="search">
                    <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="search" /> 
                </div>
            </div>
            <div className="profile">
                <i className="fa-sharp fa-solid fa-bell"></i>
                <img src="DashBoard.imgs/profile1.png" alt="" />
            </div>
        </div>
     
        <h3 className="i-name">DashBoard</h3>
        <div className="values">
            <div className="val-box">
                <i className="fa-sharp fa-solid fa-users"></i>
                <div>
                    <h3>8,35</h3>
                    <spam>New Applications</spam>
                </div>
            </div>
            <div className="val-box">
                <i className="fa-sharp fa-solid fa-users"></i>
                <div>
                    <h3>8,22</h3>
                    <spam>New Messages</spam>
                </div>
            </div>
            <div className="val-box">
                <i className="fa-sharp fa-solid fa-users"></i>
                <div>
                    <h3>8,222</h3>
                    <spam>New Users</spam>
                </div>
            </div>
            <div className="val-box">
                <i className="fa-sharp fa-solid fa-users"></i>
                <div>
                    <h3>8,222</h3>
                    <spam>New Users</spam>
                </div>
            </div>
        </div>
        <div className="board">
            <table width="100%">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Title</td>
                        <td>Status</td>
                        <td>Role</td>
                        <td></td>
                    </tr>
                </thead>
               
                <tr>
                    <td className="people">
                        <img src="DashBoard.imgs/profile1.png " alt=""/>
                        <div className="people-de">
                            <h5>John Doe1</h5>
                            <p>john1@example.com </p>
                        </div>
                    </td>
                    <td className="people-des">
                        <h5>Software Engineer</h5>
                        <p>Web Devo</p>
                    </td>
                    <td className="active">
                        <p>Resume</p>
                    </td>
                    <td className="role">
                        <p>Student</p>
                    </td>
                    <td className="edit
                    "><a href="#">Contact</a></td>
                </tr>
                <tr>
                    <td className="people">
                        <img src="DashBoard.imgs/card_slider1.jpg " alt=""/>
                        <div className="people-de">
                            <h5>John Doe 2</h5>
                            <p>john2@example.com </p>
                        </div>
                    </td>
                    <td className="people-des">
                        <h5>Android App Development</h5>
                        <p>Work From Home</p>
                    </td>
                    <td className="active">
                        <p>Resume</p>
                    </td>
                    <td className="role">
                        <p>Employee</p>
                    </td>
                    <td className="edit
                    "><a href="#">Contact</a></td>
                </tr>
                <tr>
                    <td className="people">
                        <img src="DashBoard.imgs/profile1.png " alt=""/>
                        <div className="people-de">
                            <h5>John Doe 3</h5>
                            <p>john3@example.com </p>
                        </div>
                    </td>
                    <td className="people-des">
                        <h5>Flutter Development</h5>
                        <p>Work From Home</p>
                    </td>
                    <td className="active">
                        <p>Resume</p>
                    </td>
                    <td className="role">
                        <p>Student</p>
                    </td>
                    <td className="edit
                    "><a href="#">Contact</a></td>
                </tr>
                <tr>
                    <td className="people">
                        <img src="DashBoard.imgs/profile1.png " alt=""/>
                        <div className="people-de">
                            <h5>John Doe4</h5>
                            <p>john4@example.com </p>
                        </div>
                    </td>
                    <td className="people-des">
                        <h5>Android Development</h5>
                        <p>Work From Home</p>
                    </td>
                    <td className="active">
                        <p>Resume</p>
                    </td>
                    <td className="role">
                        <p>Employee</p>
                    </td>
                    <td className="edit
                    "><a href="#">Contact</a></td>
                </tr>
                <tr>
                    <td className="people">
                        <img src="DashBoard.imgs/profile1.png " alt="" />
                        <div className="people-de">
                            <h5>John Doe</h5>
                            <p>john@example.com </p>
                        </div>
                    </td>
                    <td className="people-des">
                        <h5>Software Engineer</h5>
                        <p>Web Devo</p>
                    </td>
                    <td className="active">
                        <p>Resume</p>
                    </td>
                    <td className="role">
                        <p>Student</p>
                    </td>
                    <td className="edit
                    "><a href="#">Contact</a></td>
                </tr>
                <tr>
                    <td className="people">
                        <img src="DashBoard.imgs/profile1.png " alt=""/>
                        <div className="people-de">
                            <h5>John Doe</h5>
                            <p>john@example.com </p>
                        </div>
                    </td>
                    <td className="people-des">
                        <h5>Software Engineer</h5>
                        <p>Web Devo</p>
                    </td>
                    <td className="active">
                        <p>Resume</p>
                    </td>
                    <td className="role">
                        <p>Employee</p>
                    </td>
                    <td className="edit
                    "><a href="#">Contact</a></td>
                </tr>
                <tr>
                    <td className="people">
                        <img src="DashBoard.imgs/profile1.png " alt=""/>
                        <div className="people-de">
                            <h5>John Doe</h5>
                            <p>john@example.com </p>
                        </div>
                    </td>
                    <td className="people-des">
                        <h5>Software Engineer</h5>
                        <p>Web Devo</p>
                    </td>
                    <td className="active">
                        <p>Resume</p>
                    </td>
                    <td className="role">
                        <p>Employee</p>
                    </td>
                    <td className="edit
                    "><a href="#">Contact</a></td>
                </tr>
                <tr>
                    <td className="people">
                        <img src="DashBoard.imgs/profile1.png " alt=""/>
                        <div className="people-de">
                            <h5>John Doe</h5>
                            <p>john@example.com </p>
                        </div>
                    </td>
                    <td className="people-des">
                        <h5>Software Engineer</h5>
                        <p>Web Devo</p>
                    </td>
                    <td className="active">
                        <p>Resume</p>
                    </td>
                    <td className="role">
                        <p>Student</p>
                    </td>
                    <td className="edit
                    "><a href="#">Contact</a></td>
                </tr>
                <tr>
                    <td className="people">
                        <img src="DashBoard.imgs/profile1.png " alt=""/>
                        <div className="people-de">
                            <h5>John Doe</h5>
                            <p>john@example.com </p>
                        </div>
                    </td>
                    <td className="people-des">
                        <h5>Software Engineer</h5>
                        <p>Web Devo</p>
                    </td>
                    <td className="active">
                        <p>Resume</p>
                    </td>
                    <td className="role">
                        <p>Student</p>
                    </td>
                    <td className="edit
                    "><a href="#">Contact</a></td>
                </tr>
                <tr>
                    <td className="people">
                        <img src="DashBoard.imgs/card_slider1.jpg " alt=""/>
                        <div className="people-de">
                            <h5>John Doe</h5>
                            <p>john@example.com </p>
                        </div>
                    </td>
                    <td className="people-des">
                        <h5>Software Engineer</h5>
                        <p>Web Devo</p>
                    </td>
                    <td className="active">
                        <p>Resume</p>
                    </td>
                    <td className="role">
                        <p>Student</p>
                    </td>
                    <td className="edit
                    "><a href="#">Contact</a></td>
                </tr>
                
            </table>
        </div>
        <footer className="footer">
            <div className="containerdash">
                <div className="rowdash">
                    <div className="footer-col">
                        <h4>COMPANY</h4>
                        <ul>
                            <li><a href="#">about us</a></li>
                            <li><a href="#">our services</a></li>
                            <li><a href="#">privacy policy</a></li>
                            <li><a href="#">afflicate problem</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>GET HELP</h4>
                        <ul>
                            <li><a href="#">YOOOO</a></li>
                            <li><a href="#">YOOO</a></li>
                            <li><a href="#">YOOO</a></li>
                            <li><a href="#">00OOO</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>ONLINE </h4>
                        <ul>
                            <li><a href="#">Internship</a></li>
                            <li><a href="#">job</a></li>
                            <li><a href="#">course</a></li>
                            <li><a href="#">porto</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>FOLLOW AS</h4>
                        <div className="social-links">
                            <ul>
                                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                <a href="#"><i className="fa-brands fa-google"></i></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    
        </footer>
        
     

    </section>
    </div>

    );
  }

export default Dashboard;  