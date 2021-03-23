import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AuthorsContextProvider from "./context/AuthorsContextProvider";
import DataContextProvider from "./context/DataContextProvider";
import ModalContextProvider from "./context/ModalContextProvider";
import NavbarContextProvider from "./context/NavbarContextProvider";
import Main from "./Routes/Main";
import {
  MsalProvider,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./authConfig";
import SignIn from "./components/SignIn/SignIn";
import BorrowedContextProvider from "./context/BorrwedContextProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const msalInstance = new PublicClientApplication(msalConfig);


  return (
    <DataContextProvider>
      <ModalContextProvider>
        <NavbarContextProvider>
          <AuthorsContextProvider>
            <BorrowedContextProvider>
          <BrowserRouter>
          <MsalProvider instance={msalInstance}>
          <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss={false}
              draggable={false}
              pauseOnHover={false} />
          <UnauthenticatedTemplate>
              <Route path="/" component={SignIn} />
            </UnauthenticatedTemplate>
            <AuthenticatedTemplate>
            <Navbar />
            <Switch>
           
              <Main />
            </Switch>
            
            </AuthenticatedTemplate>
            </MsalProvider>
          </BrowserRouter>
          </BorrowedContextProvider>
          </AuthorsContextProvider>
        </NavbarContextProvider>
      </ModalContextProvider>
    </DataContextProvider>
  );
}

export default App;
