import React, { useContext, useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import ResourcesPage from "../components/Resources/ResourcesPage";
import HomePage from "../components/Home/HomePage";
import HistoryPage from "../components/History/HistoryPage";
import CreateResource from "../components/Create/CreateResource";
import { useAccount, useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { addUser } from "../api/crud-api";
import jwt_decode from "jwt-decode";
import { RoleContext } from "../context/RoleContextProvider";

const Main = () => {
  const { instance, accounts } = useMsal();
   const {setRole} = useContext(RoleContext)
  const [token,setToken] = useState("")

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
          
          addUser({
            userId: response.account.localAccountId,
            userEmail: response.account.username
          })
          setRole(response.account.localAccountId === '00000000-0000-0000-bce0-c31380bc5e29' ? "Admin" :"User")
          const data = {
            token: response.accessToken,
            homeId: response.account.localAccountId
          };

          localStorage.setItem("userData", JSON.stringify(data));
          setToken(response.accessToken)
          // const decoded = jwt_decode(response.idToken)
          // console.log(response)
          // console.log(JSON.parse(localStorage.getItem("userData")))
        });
    }

  };

  useEffect(() => {
    requestProfileData();
  }, []);

  if (!token) return <Redirect to="/" />;

  return (
    <>
   
      <Route exact path="/" component={HomePage} />
      <Route path="/resources" component={ResourcesPage} />
      <Route path="/history" component={HistoryPage} />
      <Route path="/create" component={CreateResource} />
    </>
  );
};

export default Main;
