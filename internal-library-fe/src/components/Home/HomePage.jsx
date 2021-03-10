import React, { useContext, useEffect } from 'react'
import { HOME_PAGE_ID } from '../../config/config'
import { NavbarContext } from '../../context/NavbarContextProvider'

const HomePage = () => {
    const { setActiveNavLink } = useContext(NavbarContext)
    useEffect   (() => {
        setActiveNavLink(HOME_PAGE_ID)
    }, [])
    return (
        <div>
            HOMEPAGE
        </div>
    )
}

export default HomePage
