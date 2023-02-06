import React from 'react';
import {NavLink,Link} from "react-router-dom";
import './home.css';


function Header1(){
        return (
           <>
           {/* <!--NAVBAR--> */}
    <section className="navbar navbar-expand-lg bg-body-tertiary fixed-top" >
        <div className="container-fluid" >
            <img src="homephotos/internsalalogo.png" alt="" width="100" height="60" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navfont" >
              <li className="nav-item " >
                <Link className="nav-link active "  aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" aria-current="page" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-dark " aria-current="page" to="#about">About</NavLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" aria-current="page" to="/features">Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" aria-current="page" to="#reviews">Reviews</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark " aria-current="page" to="blogs">Blogs</Link>
              </li>
              <li className="nav-item-22">
                <div className="profile-23">
                   <Link to="contacts" ><i className="fa-solid fa-phone"></i> </Link>
                </div>
              </li>
              <li className="nav-item-22">
                <div className="profile-23">
                    <i className="fa-sharp fa-solid fa-bell"></i>
                </div>
              </li>
              <li className="nav-item">
                <div className="profile-23">
                    <Link to="/Login"><img src="homephotos/profile1.png" alt=""/></Link>
                </div>
              </li>
            </ul>  
           {/* <!--   <li className="nav-item">
                <a className="nav-link" to="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" to="#">Action</a></li>
                  <li><a className="dropdown-item" to="#">Another action</a></li>
                  <li><hr className="dropdown-divider"></li>
                  <li><a className="dropdown-item" to="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <h1>sai</h1>
              <h3>manee</h3>
            </form>
        --> */}
          </div>
        </div>
    </section>
    </>
       
       );
    }
    
    export default Header1;  