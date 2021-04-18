import React,{useEffect} from "react";
import { UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";
import Logo from "../../img/logo.png";
const SignIn = (props) => {
  const { instance } = useMsal();
  return (
    <div className="sign-in">
   
     <div className="sign-in-section">
          <div>
             <img src={Logo} width="100%" height="100px" alt=""/>
          </div>
          <UnauthenticatedTemplate>
          <button
            className="btn add"
            onClick={() => instance.loginRedirect(loginRequest)}
          >
            Sign In
          </button>
        </UnauthenticatedTemplate>
      </div>
      
     
  

    </div>
  );
};

export default SignIn;
