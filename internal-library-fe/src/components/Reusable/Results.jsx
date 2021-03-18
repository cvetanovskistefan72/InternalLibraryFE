import React from 'react'

const Results = ({results,pages}) => {
    return (
        <div className="results">
            <span className="results-badge" >{results} results / {pages} pages</span>
        </div>
    )
}

export default Results
