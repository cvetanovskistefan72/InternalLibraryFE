import React, { useContext, useEffect, useState } from 'react'
import { RESOURCES_PAGE_ID } from '../../config/config'
import { DataContext } from '../../context/DataContextProvider'
import { ModalContext } from '../../context/ModalContextProvider'
import { NavbarContext } from '../../context/NavbarContextProvider'
import Modal from '../Modal/Modal'
import DeleteModal from '../Modal/ModalComponents/DeleteModal'
import EditResource from '../Modal/ModalComponents/EditResource'
import SeeDetails from '../Modal/ModalComponents/SeeDetails'
import Pagination from '../Reusable/Pagination'
import Results from '../Reusable/Results'
import ResourcesTable from './ResourcesTable'


const ResourcesPage = () => {

    //CONTEXT
    const { data, getData } = useContext(DataContext)
    const { deleteModal, setDeleteModal, detailsModal,setDetailsModal, editModal, setEditModal } = useContext(ModalContext)
    const { setActiveNavLink } = useContext(NavbarContext)

    //STATE
    const [deleteId, setDeleteId] = useState()
    const [resource, setResource] = useState({})
    
  

    useEffect(() => {
        getData()
        setActiveNavLink(RESOURCES_PAGE_ID)
    }, [])
    
    return (
        <div className="resources-page container">
            <div className="resources-page-upper">
                {
                    deleteModal && (
                        <Modal setDeleteModal={setDeleteModal}>
                            <DeleteModal
                                deleteModal={deleteModal}
                                setDeleteModal={setDeleteModal}
                                deleteId={deleteId}
                                getData={getData}
                                />
                        </Modal>
                    )
                }
                {
                    detailsModal && (
                        <Modal>
                            <SeeDetails
                                detailsModal={detailsModal}
                                setDetailsModal={setDetailsModal}
                                resource={resource}/>
                        </Modal>
                    )
                }
                {
                    editModal && (
                        <Modal>
                            <EditResource
                                getData={getData}
                                editModal={editModal}
                                setEditModal={setEditModal}
                                resource={resource}/>
                        </Modal>
                    )
                }
            </div>
            <div className="resources-page-middle">
                <ResourcesTable
                    data={data}
                    setDeleteModal={setDeleteModal}
                    setDeleteId={setDeleteId}
                    setDetailsModal={setDetailsModal}
                    setResource={setResource}
                    setEditModal={setEditModal}
                    />
            </div>
            <div className="resources-page-bottom">
                <Results />
                <Pagination />
            </div>

        </div>
    )
}

export default ResourcesPage
