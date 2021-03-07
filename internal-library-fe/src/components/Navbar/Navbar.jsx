import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHistory,faHome,faArchive,faUserCog,faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
    return (

        <nav>
            <div class="nav-wrapper">
                <div className="container">
                    <a href="#" class="brand-logo left">Logo</a>
                    <ul id="nav-mobile" class="right">
                        <li><NavLink to="/"><FontAwesomeIcon icon={faHome}/></NavLink></li>
                        <li><NavLink to="/resources"><FontAwesomeIcon icon={faArchive} /></NavLink></li>
                        <li><NavLink to="/history"><FontAwesomeIcon icon={faHistory} /></NavLink></li>
                        <li><a><FontAwesomeIcon icon={faUserCog} /></a></li>
                        <li><a><FontAwesomeIcon icon={faSignOutAlt} /></a></li>
                        
                    </ul>
               </div>
            </div>
        </nav>

    )
}

export default Navbar
