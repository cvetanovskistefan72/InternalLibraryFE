import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose,faPlus } from '@fortawesome/free-solid-svg-icons'

const SeeDetails = ({ detailsModal, setDetailsModal, resource }) => {

    if (!detailsModal) return null


    return (
        <div className="details-modal">
            <div class="card">
                <div className="details-modal-upper">
                    <FontAwesomeIcon
                        onClick={() => setDetailsModal(false)}
                        style={{ color: '#b71c1c', fontSize: '1.5rem', cursor: 'pointer' }}
                        icon={faWindowClose} />
                </div>
                <div class="card-content">
                    <div>
                        <h5>{resource.name}</h5>
                        <br/>
                        <p>{resource.description}</p>
                        <br/>
                        <h6>{resource.quantity} items left</h6>
                    </div>
                </div>
                <div class="card-action">
                    <button
                        onClick={() => setDetailsModal(false)}
                        className="btn cancel">Cancel</button>
                    <button
                        onClick={async () => {
                            setDetailsModal(false)
                        }}
                        className="btn add">
                        <span>Borrow </span>
                        <FontAwesomeIcon icon={faPlus} /></button>
                </div>
            </div>

        </div>
    )
}

export default SeeDetails
