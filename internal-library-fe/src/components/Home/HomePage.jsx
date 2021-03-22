import React, { useContext, useEffect } from 'react'
import { HOME_PAGE_ID } from '../../config/config'
import { BorrowedContext } from '../../context/BorrwedContextProvider'
import { NavbarContext } from '../../context/NavbarContextProvider'

const HomePage = () => {
    const { setActiveNavLink } = useContext(NavbarContext)
    const { borrowed ,getBorrowed}  = useContext(BorrowedContext)
    useEffect   (() => {
        setActiveNavLink(HOME_PAGE_ID)
        const user = JSON.parse(localStorage.getItem("userData"))
        getBorrowed(user.homeId)
    }, [])


    console.log(borrowed)
    return (
        <div>
            HOMEPAGE
        </div>
    )
}

export default HomePage
