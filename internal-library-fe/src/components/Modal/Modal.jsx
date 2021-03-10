import React from 'react'
import ReactDom from 'react-dom'

const Modal = ({setDeleteModal,children}) => {

   
    return ReactDom.createPortal(<>
        <div  className="overlay">
            <div className="modal-2">
                {children}
            </div>
        </div>
    </>, document.querySelector(".modal2"))
}

export default Modal
