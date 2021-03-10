import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import DataContextProvider from "./context/DataContextProvider";
import ModalContextProvider from "./context/ModalContextProvider";
import NavbarContextProvider from "./context/NavbarContextProvider";
import Main from "./Routes/Main";

function App() {
  return (
    <DataContextProvider>
      <ModalContextProvider>
        <NavbarContextProvider>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Main />
            </Switch>
          </BrowserRouter>
        </NavbarContextProvider>
      </ModalContextProvider>
    </DataContextProvider>
  );
}

export default App;
