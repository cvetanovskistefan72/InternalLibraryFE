import React from 'react'
import { Route } from 'react-router-dom'
import ResourcesPage from '../components/Resources/ResourcesPage'
import HomePage from '../components/Home/HomePage'
import HistoryPage from '../components/History/HistoryPage'
import CreateResource from '../components/Forms/CreateResource'

const Main = () => {
    return (
        <>
            
            <Route exact path="/" component={HomePage} />
            <Route path="/resources" component={ResourcesPage} />
            <Route path="/history" component={HistoryPage} />
            <Route path="/create" component={CreateResource} />
        </>
    )
}

export default Main
