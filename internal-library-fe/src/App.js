import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AuthorsContextProvider from "./context/AuthorsContextProvider";
import DataContextProvider from "./context/DataContextProvider";
import ModalContextProvider from "./context/ModalContextProvider";
import NavbarContextProvider from "./context/NavbarContextProvider";
import Main from "./Routes/Main";

function App() {
  return (
    <DataContextProvider>
      <ModalContextProvider>
        <NavbarContextProvider>
          <AuthorsContextProvider> 
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Main />
            </Switch>
          </BrowserRouter>
          </AuthorsContextProvider>
        </NavbarContextProvider>
      </ModalContextProvider>
    </DataContextProvider>
  );
}

export default App;
