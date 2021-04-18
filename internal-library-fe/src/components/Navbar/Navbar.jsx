import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { NavbarContext } from "../../context/NavbarContextProvider";
import Logo from "../../img/logo.png";
import { loginRequest } from "../../authConfig";
import { useMsal } from "@azure/msal-react";
import { RoleContext } from "../../context/RoleContextProvider";

const Navbar = () => {
  const { navState } = useContext(NavbarContext);
  const { role } = useContext(RoleContext)
  const { instance } = useMsal();
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="container">
          <Link to="/" className="brand-logo left">
            <img src={Logo} style={{ marginTop: "5px" }} height="50px" alt="" />
          </Link>
          <ul id="nav-mobile" className="right">
            {navState.map((link, i) =>{
              if(link.id === 2 && role !== "Admin"){
                return null
              }else{
                return(
                  <li key={i} className={link.active ? "nav-active" : ""}>
                  <NavLink to={link.path}>
                    <FontAwesomeIcon
                      style={
                        link.active ? { color: "#222222" } : { color: "white" }
                      }
                      icon={link.icon}
                    />
                  </NavLink>
                </li>
                )
              }
            })}
            <li
              onClick={() => {
                localStorage.removeItem("userData");
                instance.logout(loginRequest);
              }}
            >
              <a>
                <FontAwesomeIcon icon={faSignOutAlt} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
