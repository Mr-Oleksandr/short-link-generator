import React, {useContext} from 'react';
import {NavLink, useNavigate} from 'react-router-dom'
import {AuthContext} from "../../context/AuthContext";
import Logo from "../../Icons/Logo";
import './Navbar.css'
import Line from "../../Icons/Line";
const Navbar = () => {
   const auth =  useContext(AuthContext)
    const history = useNavigate()

    const loggoutHandler = (e) => {
        e.preventDefault()
        auth.logout()
        history('/')
    }
    return (
        <div>
           <nav className="nav background white">
              <div className="nav-wrapper">
                  <div>
                      <h1 className="header-logo"><Logo/></h1>
                      <Line className='vector-line'/>
                  </div>
                  <div>
                      <NavLink className="validate-link" to="/detail">Validate Link</NavLink>
                      <NavLink className="btn-docs" to="/docs">Docs</NavLink>
                  </div>
              </div>
           </nav>
        </div>
    );
};

export default Navbar;

