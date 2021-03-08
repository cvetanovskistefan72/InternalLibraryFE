import React from 'react'
import Pagination from '../Reusable/Pagination'
import Results from '../Reusable/Results'
import ResourcesTable from './ResourcesTable'

const ResourcesPage = () => {
    return (
        <div className="resources-page container">
            <div className="resources-page-middle">
                <ResourcesTable />
            </div>
            <div className="resources-page-bottom">
                <Results />
                <Pagination />
            </div>

        </div>
    )
}

export default ResourcesPage
