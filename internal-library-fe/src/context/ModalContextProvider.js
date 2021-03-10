import React, { createContext, useState } from 'react'

export const ModalContext = createContext()

const ModalContextProvider = (props) => {
    const [deleteModal, setDeleteModal] = useState(false)
    const [detailsModal,setDetailsModal] = useState(false)
    const values = {
        deleteModal,
        setDeleteModal,
        detailsModal,
        setDetailsModal
    }
   
 
    return (
        <ModalContext.Provider value={values}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalContextProvider