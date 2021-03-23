import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import ResourcesPage from '../components/Resources/ResourcesPage'
import HomePage from '../components/Home/HomePage'
import HistoryPage from '../components/History/HistoryPage'
import CreateResource from '../components/Create/CreateResource'
import { useAccount, useMsal } from '@azure/msal-react'
import { loginRequest } from '../authConfig'

const Main = () => {
    const { instance, accounts } = useMsal();


    const account = useAccount(accounts[0] || {});
    const requestProfileData = () => {
      if (account) {
        instance
          .acquireTokenSilent({
            ...loginRequest,
            account,
          })
          .then((response) => {
            // accesss token
            console.log(response)
            const data ={ token: response.accessToken,
                         homeId: response.account.localAccountId,
                         name: response.account.name,
                         mail: response.account.username}


            localStorage.setItem("userData",JSON.stringify(data))
                console.log(JSON.parse(localStorage.getItem("userData")))
          });
      }
    };


    useEffect(() => {
        requestProfileData();
       
      }, []);

    if(!localStorage.getItem("userData")) return null

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
