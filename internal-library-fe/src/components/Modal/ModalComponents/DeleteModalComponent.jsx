import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { deleteResource } from '../../../api/crud-api'

const DeleteModalComponent = ({ deleteModal, setDeleteModal, deleteId, getData }) => {

    if (!deleteModal) return null
    
    return (
        <div className="delete-modal">
            <div className="delete-modal-upper">
                <FontAwesomeIcon
                    onClick={() => setDeleteModal(false)}
                    style={{ color: '#b71c1c', fontSize: '1.5rem', cursor: 'pointer' }}
                    icon={faWindowClose} />
            </div>
            <div className="delete-modal-middle">
                <h5>Confirm Delete?</h5>
            </div>
            <div className="delete-modal-bottom">
                <button
                    onClick={() => setDeleteModal(false)}
                    className="btn cancel">Cancel</button>
                <button
                    onClick={async () => {
                        await deleteResource(deleteId)
                        await getData()
                        setDeleteModal(false)
                    }}
                    className="btn delete">Confirm</button>
            </div>
        </div>
    )
}

export default DeleteModalComponent
