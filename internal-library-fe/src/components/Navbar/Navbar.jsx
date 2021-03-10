import React, { useState,useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import { NavbarContext } from '../../context/NavbarContextProvider'
import Logo from '../../img/logo.png'

const Navbar = () => {
    const { navState } = useContext(NavbarContext)
    
    return (

        <nav>
            <div className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo left">
                        
                        <img src={Logo} style={{ marginTop:'-15px'}}height='100px' alt=""/>
                    </Link>
                    <ul id="nav-mobile" className="right">
                        {
                            navState.map((link) =>
                            (<li className={link.active && "nav-active"}>
                                <NavLink to={link.path}>
                                <FontAwesomeIcon
                                    style={link.active ? { color: '#222222' } : { color: 'white' }}
                                    icon={link.icon} />
                                </NavLink></li>)
                            )
                        }
                        <li><a><FontAwesomeIcon icon={faSignOutAlt} /></a></li>

                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar


