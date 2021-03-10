import React, { useContext, useEffect } from 'react'
import { HISTORY_PAGE_ID } from '../../config/config'
import { NavbarContext } from '../../context/NavbarContextProvider'

const HistoryPage = () => {
    const { setActiveNavLink } = useContext(NavbarContext)
    useEffect(() => {
        setActiveNavLink(HISTORY_PAGE_ID)
    }, [])
    return (
        <div>
            HISTORYPAGE
        </div>
    )
}

export default HistoryPage
