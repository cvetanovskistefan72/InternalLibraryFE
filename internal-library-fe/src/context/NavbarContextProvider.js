import React, { createContext, useState } from 'react'
import { faHistory, faHome, faArchive, faSignOutAlt, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
export const NavbarContext = createContext()

//THIS CONTEXT IS MADE TO DISPLAY THE ACTIVE NAVBAR
//EACH PAGE MOUNTS IT AUTOMATICLY CALLS THE SETACTIVELINK AND THE DATA GOES
//TO THE NAVBAR WHERE THE ACTIVE NAVLINK IS WHITE

const NavLinks = [
    {
        id: 1,
        path: "/create",
        icon: faPlusSquare,
        active: true
    },
    {
        id: 2,
        path: "/",
        icon: faHome,
        active: false
    },
    {
        id: 3,
        path: "/resources",
        icon: faArchive,
        active: false
    },
    {
        id: 4,
        path: "/history",
        icon: faHistory,
        active: false
    }
]
const NavbarContextProvider = (props) => {

    const [navState, setNavState] = useState(NavLinks)

    const setActiveNavLink = (ID) => {
        const newNavState = navState.map(({ id, path, icon, active }) => {
            return { id, path, icon, active: ID === id ? true : false }
        })
        setNavState(newNavState)
    }
    const values = {
        navState,
        setActiveNavLink
    }


    return (
        <NavbarContext.Provider value={values}>
            {props.children}
        </NavbarContext.Provider>
    )
}

export default NavbarContextProvider